pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clone the Git repository
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: 'https://github.com/cp23kk1/cp23kk1_frontend_app.git']])

                    // Fetch Git tags
                    def tags = sh(script: 'git for-each-ref --sort=taggerdate --format="%(refname:short)" refs/tags', returnStdout: true).trim()
                    currentBuild.description = "Select a Git tag to build and deploy:"
                    params.TAG = choice(name: 'TAG', choices: tags, description: 'Select a Git tag')
                }
            }
        }

        stage('Build and Deploy') {
            when {
                expression { params.TAG != null }
            }
            steps {
                script {
                    // Use the selected tag for build and deploy
                    def selectedTag = params.TAG
                    sh "git checkout $selectedTag"
                    // Add your build and deploy steps here
                }
            }
        }
    }
}
