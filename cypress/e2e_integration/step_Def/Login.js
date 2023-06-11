import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signin_PO from "../../pageObjects/pageActions/signin_Actions";
const signin_obj = new signin_PO();

let userNameex;
let passwordEx;

Given("User launch the application", function () {
  // Write the logic here to launch the application
  signin_obj.launchSigninPage();
});
When("User enter the credentials", function () {
  signin_obj.enterCredentials(Cypress.env("userId"), Cypress.env("password"));
});
Then("Verify the login page title", function () {
  signin_obj.loginPageTitle();
});

// This is for multiple username and password

When(
  "User enter {string} as the username and {string} as the password",
  (uname, pwd) => {
    userNameex = uname;
    passwordEx = pwd;
    signin_obj.enterCredentials(userNameex, passwordEx);
  }
);

Then("User validate the error message", () => {
  signin_obj.validateInvalidCreden();
});

When("User click the forget password link", () => {
  signin_obj.clickforgetpwd();
});

Then(
  "User enter the username in the username text box and click reset button",
  () => {
    signin_obj.resetDetailSubmit();
  }
);
Then("Verify the reset success message dispalyed", () => {
  signin_obj.validateResetSucc();
});
