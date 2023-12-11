pipeline {
    agent any

    parameters {
      choice(choices: ["dev", "sit", "prod"], description: "Which environment to deploy?", name: "deployEnvironment")
    }

    environment {
        NEXT_IMAGE_NAME = "vocaverse-app"
        CONTAINER_NAME = "vocaverse-app"
    }

    stages {

        stage('Build App Images') {
            steps {
                script {
                   // Create .env file with specified content
                    def envContent = """
                        API_URL=${env.ORIGIN}
                        PROD_API_URL=https://capstone23.sit.kmutt.ac.th
                        ENV=${params.deployEnvironment}
                        APP_VERSION=${GIT_TAG}
                    """
                    writeFile file: '.env', text: envContent

                    // Display the content of the created .env file
                    echo "Content of .env:"
                    echo readFile('.env')
                    sh "docker build -t  ${NEXT_IMAGE_NAME}:${GIT_TAG} \
                     --build-arg APP_VERSION=${GIT_TAG} \
                     --build-arg ENV=${params.deployEnvironment} ."
                }
            }
        }
        stage ('Remove container'){
            steps {
              script {
                    // Run the command and capture the exit code
                    def exitCode = sh(script: "docker rm -f ${CONTAINER_NAME}-${params.deployEnvironment}", returnStatus: true)

                    // Check the exit code to determine success or failure
                    if (exitCode == 0) {
                        echo "Container removal was successful"
                        // Add more steps or logic here if needed
                    } else {
                        echo "Container removal failed or was skipped"
                        // Add more steps or logic here if needed
                    }
              }
            }
        }

        stage('Deploy') {
            steps {
                script {

                  sh "docker run -d --name ${CONTAINER_NAME}-${params.deployEnvironment} --network ${params.deployEnvironment}-network ${NEXT_IMAGE_NAME}:${GIT_TAG}"
                }
            }
        }

        stage('Clear Storage') {
            steps {
                script {
                    sh "docker image prune -a -f"
                }
            }
        }

        stage('Health Cheack') {
            steps {
                script {
                    def containerId = sh(script: "docker ps -q --filter name=${CONTAINER_NAME}-${params.deployEnvironment}", returnStdout: true)

                    if (containerId) {
                        def healthStatus = sh(script: "docker inspect --format '{{.State.Running}}'  ${containerId}", returnStdout: true)
                        
                        echo "Helath : ${healthStatus}"
                        if (healthStatus) {
                            echo "Container is running healthily."
                        } else {
                            error "Unable to retrieve container health status."
                        }
                    } else {
                        error "Container not found. Make sure it is running."
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline successfully completed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
