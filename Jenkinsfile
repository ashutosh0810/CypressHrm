pipeline{
  agent any


  parameters {
    string(name: 'SPEC' , defaultValue: "cypress/e2e_integration/**/**/")
    choice(name: 'BROWSER', choices: ['chrome','edge'],description:' choice the browser')

  }

  stages{
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
        bat "npn i"
        bat "npx cypress run --browser chrome --spec  ${SPEC}"
      }
    }
  }





}
