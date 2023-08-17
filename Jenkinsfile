pipeline{
  agent any


  parameters {
    string(name: 'SPEC' , defaultValue: "cypress/e2e_integration/apiTest.js")
    choice(name: 'BROWSER', ['chrome','edge'],description:' choice the browser')

}

  stages{
   
    stage('deploying')
    {
      steps {
      echo 'Building the project' }
    }

    stage('Checkout from GitHub') {
            steps {
                // Checkout from the Git repository and branch
                git(
                    url: 'https://github.com/ashutosh0810/CypressHrm.git',
                    branch: 'feature'
                )
            }
        }

    stage('Testing')
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
        echo 'deploying '
      }
      
    }
  }

  post{
    always{
      echo ' post build process '
    }
  }

}
