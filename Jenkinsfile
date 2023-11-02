pipeline {
    agent any

    parameters {
        choice(
            name: 'BRANCH',
            choices: ['master', 'feature-branch'], // Add your specific branch names here
            description: 'Select a Git branch'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clone the Git repository based on the selected branch
                    checkout([$class: 'GitSCM', branches: [[name: params.BRANCH]], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: 'https://github.com/cp23kk1/cp23kk1_frontend_app.git']]])

                    // Fetch Git tags from the selected branch
                    def tags = sh(script: "git for-each-ref --sort=taggerdate --format="%(refname:short)" refs/tags", returnStdout: true).trim()
                    currentBuild.description = "Select a Git tag to build and deploy:"
                    params.TAG = choice(name: 'TAG', choices: tags.split('\n'), description: 'Select a Git tag')
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