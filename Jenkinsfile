node {
  
   withCredentials([usernamePassword(credentialsId: 'chayakornGlobal', passwordVariable: 'GIT_HUB_PASSWORD', usernameVariable: 'GIT_HUB_USERNAME')]) {
        TAGS = sh (script: 'git ls-remote --tags https://${GIT_HUB_USERNAME}:${GIT_HUB_PASSWORD}@github.com/cp23kk1/cp23kk1_frontend_app.git | cut -f 2 | cut -d / -f 3 | sort -r', returnStdout:true).trim()
    }
}

pipeline {
    agent any

    parameters {
        choice(
            name: 'TagName',
            choices: "${TAGS}",
            description: 'Select the tag to build'
        )
    }

    stages {
        stage("Run Tests on Tag") {
            steps {
                sh "echo SUCCESS on Tag: ${TagName}"
            }
        }
    }
}
