import signin_PO from "../pageObjects/pageActions/signin_PO";
const locators = require("../locators_Repo.json");

// starting testing

const signin_obj = new signin_PO();

describe("Login functionality  ", function () {
  beforeEach(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  beforeEach(function () {
    signin_obj.launchSigninPage();
  });
  it("Valid login", function () {
    //
    signin_obj.enterCredentials(Cypress.env("userId"), Cypress.env("password"));
    signin_obj.loginPageTitle();
    cy.get(locators.leftmenu.pimLeft_Btn).click();
    // locate the drop down
    cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    ).click();

    //select the option
    cy.get(".oxd-select-option span")
      .contains("Chief Executive Officer")
      .click();
    // search
    cy.get("button[type='submit']").click({ force: true });
    // edit
    cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").click();
    // save
    cy.get("button[type='submit']").click();

    // validate
    cy.contains("Success").should("be.visible");

    //
  });
  it.skip("Wrong Credentials", function () {
    //
    signin_obj.enterCredentials(
      this.data.wrongPassword,
      this.data.wrongPassword
    );
    signin_obj.validateWrongCredentials();
  });
});
