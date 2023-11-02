pipeline {
    agent any

    parameters {
        extendedChoice(
            name: 'TagName',
            type: 'PT_SINGLE_SELECT',
            defaultValue: '',
            description: 'Select an option from the dropdown',
            propertyFile: '${JENKINS_HOME}/workspace/tag-dir/frontend-app-tag-list.txt'
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
