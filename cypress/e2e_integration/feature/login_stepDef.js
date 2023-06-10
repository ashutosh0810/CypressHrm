import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/*";
const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

import signin_PO from "../../pageObjects/pageActions/signin_Actions";

const signin_obj = new signin_PO();

Given("User open the AUT", function () {
  // User launch the orange Hrm application
  signin_obj.launchSigninPage();
});
When("User enter the credentials", function () {
  // User enter the username and password
  signin_obj.enterCredentials(Cypress.env("userId"), Cypress.env("password"));
});
Then("User verify the page title", function () {
  // user verify the page title
  signin_obj.loginPageTitle();
});
