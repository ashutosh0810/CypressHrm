import signin_PO from "../pageObjects/pageActions/signin_Actions";

const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
// starting testing

const signin_obj = new signin_PO();

describe("Login functionality  ", function () {
  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
      cy.log(data);
    });
  });
  beforeEach(function () {
    signin_obj.launchSigninPage();
  });
  it("Valid login", function () {
    //
    signin_obj.enterCredentials(Cypress.env("userId"), Cypress.env("password"));
    signin_obj.loginPageTitle();
  });
  it("Wrong Credentials", function () {
    //
    signin_obj.enterCredentials(
      this.data.wrongPassword,
      this.data.wrongPassword
    );
    signin_obj.validateWrongCredentials();
  });
});
