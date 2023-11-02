pipeline {
    agent any

    parameters {
        extendedChoice(
            name: 'TAG',
            type: 'PT_SINGLE_SELECT',
            groovyScript: """
                def branches = ['master', 'feature-branch'] // Add your specific branch names here
                def tags = []

                branches.each { branch ->
                    def tagsForBranch = sh(script: "git ls-remote --tags origin $branch | cut -d'/' -f3", returnStdout: true).trim().split("\n")
                    tags.addAll(tagsForBranch)
                }

                return tags.sort().unique()
            """,
            description: 'Select a Git tag'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clone the Git repository
                    checkout([$class: 'GitSCM', branches: [[name: '*/${params.TAG}']], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: 'https://github.com/cp23kk1/cp23kk1_frontend_app.git']]])
                }
            }
        }

        stage('Build and Deploy') {
            when {
                expression { params.TAG != null && params.TAG != '' }
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