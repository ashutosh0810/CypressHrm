pipeline{
  agent any


  parameters {
    string(name: 'SPEC' , defaultValue: "cypress/e2e_integration/apiTest.js")
    choice(name: 'BROWSER', ['chrome','edge'],description:' choice the browser')

  }

  stages{
    
    stage('deploying')
    {
      echo 'Building the project'
    }

    stage('Testing')
    {
      steps
      {
        bat "npn i"
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