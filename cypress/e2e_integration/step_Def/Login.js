import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signin_PO from "../../pageObjects/pageActions/signin_Actions";
const signin_obj = new signin_PO();
Given("User launch the application", function () {
	// Write the logic here to launch the application
	signin_obj.launchSigninPage();
  });
  When("User enter the credentials",function () {
	signin_obj.enterCredentials(Cypress.env("userId"), Cypress.env("password"));
  });
  Then("Verify the login page title",function(){
	signin_obj.loginPageTitle();
  })
  
