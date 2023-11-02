node {
    
      TAG_NAMES = sh (script: 'git ls-remote --tags https://github.com/cp23kk1/cp23kk1_frontend_app.git | awk -F/ \'{print $3}\'', returnStdout:true).trim()
    
}

pipeline {
    agent any

    parameters {
        choice(
            name: 'TagName',
            choices: "${TAG_NAMES}",
            description: 'to refresh the list, go to configure, disable "this build has parameters", launch build (without parameters) to reload the list and stop it, then launch it again (with parameters)'
        )
    }

    stages {
        stage("Run Tests") {
            steps {
                sh "echo SUCCESS on ${TagName}"
            }
        }
    }
}
