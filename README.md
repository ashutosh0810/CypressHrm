# Cypress BDD framework

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# Dependencies required

- Node Js
- NPM package manager
- Visual code studio

## How to run the framework

- unZip the jar file
- Navigate to the unzipped folder and run the run_tests.sh by running the below code
- `./run_test.sh` - This will ask the option one want to run like , below are few options
  - "1. Open Cypress"
  - "2. Run all tests headless"
  - "3. Run all tests headed" etc
- this will first install the package by npm install
- Then it will execute the test cases on the basis of option

## Folder Structure

- OrangeHrm_NAGP : This is the project folder

  - cypress : This will contain below folders
    - feature : This will contain multiple feature file
    - stepDefination: this will implement the feature file in Given when then
    - apiTest.js : This is for the api test using mocha framework
  - fixtures: This will contain below folders
    - expectedPostResponse.json : Contain the expected response of post reques
    - getResponse.json: Contain the get response to validate the actual response
    - newUser.json : contains the body of Post request
  - pageObjects: This will contain 2 sub folders
    - PageActions : This will contain many .js file that will be responsible for the actions happening on the particular pages
    - PageElement: This will return the element for that particular page
  - Reports : This will contain mochawesome report for the execution
  - screenshots: This will contain the screenshot of the fail test generated using cy.screenshots()

  - support : This will contain below folder
    - command.js : this will contain the reusable methods to encapsulate commonly performed actions
    - e2e.js: Use to leep the global configuration
  - locators_repo.json : This will only contain the css locators for the UI element
  - testData.json : This will contain the required test data for the Ui test cases
  - cypress.config.js : This file is used in Cypress to configure various settings and options for your test environment. It allows you to customize Cypress behavior, define environment variables, and override default configuration values.
  - cypressoutputData.json : this will store the data fetched from UI for futher processing
  - package.json : This file is a crucial component of any Node.js project, including Cypress. It is used to manage dependencies, define scripts, and provide metadata about the project.
  - runtest.sh : This file act as entry point for running the test cases
    `./runtest.sh`

## plugin installed

1.  cucumber gherkin full support
2.  Playwright/Cypress steps defination generator
3.  Prettier

## Note

Spec screenshots has been attached with 7 specs on the drive.
