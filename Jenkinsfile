pipeline {
    agent any

    parameters {
        choice(name: 'TAG', choices:  sh(script: 'git for-each-ref --sort=taggerdate --format="%(refname:short)" refs/tags', returnStdout: true).trim(), description: 'Select a Git tag to build and deploy')
    }

    environment {
        GIT_REPO = 'https://github.com/cp23kk1/cp23kk1_frontend_app.git'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clone the Git repository
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: env.GIT_REPO]]])
                }
            }
        }

        stage('Get Tags') {
            steps {
                script {
                    // Fetch Git tags
                    def tags = sh(script: 'git for-each-ref --sort=taggerdate --format="%(refname:short)" refs/tags', returnStdout: true).trim()
                    currentBuild.description = "Select a Git tag to build and deploy:"
                    params.TAG.choices = tags.split("\n")
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
