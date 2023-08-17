pipeline{
  agent any


  parameters {
    string(name: 'SPEC' , defaultValue: "cypress/e2e_integration/apiTest.js")
    choice(name: 'BROWSER', ['chrome','edge'],description:' choice the browser')

}

  stages{
   
    stage('start')
    {
      steps {
      echo 'Building the project' 
      }
    }

    stage('build') {
            steps {
                // Checkout from the Git repository and branch
                git(
                    url: 'https://github.com/ashutosh0810/CypressHrm.git',
                    branch: 'feature'
                )
            }
        }

    stage('test')
    {
      steps
      {
        bat "npm i"
        bat "npx cypress run --browser chrome --spec  ${SPEC}"
      }
    }

    stage ('deploying ')
    {
      steps{
        echo 'deploying not implemented'
      }
      
    }
  }

  post{
    always{
      echo ' post build process '
    }
  }

}
