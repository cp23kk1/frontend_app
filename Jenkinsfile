pipeline {
    agent any

    stages {
        

        stage('Get Tags') {
            steps {
                script {
                    // Fetch Git tags
                    def tags = sh(script: 'git for-each-ref --sort=taggerdate --format="%(refname:short)" refs/tags', returnStdout: true).trim()
                    env.GIT_TAGS = tags
                }
            }
        }

        stage('Select Tag') {
            steps {
                script {
                    // Create a dropdown parameter for selecting a tag
                    def tagParameter = input(
                        id: 'TAG_SELECTION',
                        message: 'Select a Git tag to build and deploy:',
                        parameters: [choice(name: 'TAG', choices: env.GIT_TAGS, description: 'Select a Git tag')]
                    )
                    env.SELECTED_TAG = tagParameter
                }
            }
        }

        stage('Build and Deploy') {
            when {
                expression { env.SELECTED_TAG != null }
            }
            steps {
                script {
                    // Use the selected tag for build and deploy
                    def selectedTag = env.SELECTED_TAG
                    sh "git checkout $selectedTag"
                    // Add your build and deploy steps here
                }
            }
        }
    }
}
