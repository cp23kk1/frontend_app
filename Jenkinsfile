properties([
    parameters([
        [$class: 'CascadeChoiceParameter',
            choiceType: 'PT_SINGLE_SELECT',
            description: 'Select a Tag',
            filterLength: 1,
            filterable: true,
            name: 'TagChoice',
            referencedParameters: 'ParentParameter',
            script: [
                $class: 'GroovyScript',
                fallbackScript: [
                    classpath: [], sandbox: false,
                    script: 'return ["No Tags Found"]'
                ],
                script: [
                    classpath: [], sandbox: false,
                    script: '''
                        def parentParamValue = ParentParameter
                        if (parentParamValue == 'Option1') {
                            def tagsFileContents = readFile('/path/to/tag-file-option1.txt')
                            return tagsFileContents.readLines()
                        } else if (parentParamValue == 'Option2') {
                            def tagsFileContents = readFile('/path/to/tag-file-option2.txt')
                            return tagsFileContents.readLines()
                        } else {
                            return ["No Tags Found"]
                        }
                    '''
                ]
            ]
        ),
        choice(
            name: 'ParentParameter',
            choices: ['Option1', 'Option2'],
            description: 'Select an option to determine reactive choices'
        )
    ])
])

node {
    stage("Example Stage") {
        // You can access the selected value of TagChoice like this:
        def selectedTag = params.TagChoice
        echo "Selected tag: ${selectedTag}"
    }
}
