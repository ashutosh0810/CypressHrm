import signIn_Element from "../pageElements/signIn_Element";
const locators = require("../../object_Repository.json");

export default class signin_PO {
  constructor() {
    globalThis.signIn_Elements = new signIn_Element();
  }

  enterCredentials(userName, pswd) {
    cy.log(" this is username and password ", userName, pswd);
    signIn_Elements.usernameTxtBx().should("be.visible");
    signIn_Elements.passwordTxtBx().should("be.visible");
    signIn_Elements.submitBtn().should("be.visible");
    signIn_Elements.usernameTxtBx().clear().type(userName);
    signIn_Elements.passwordTxtBx().clear().type(pswd);
    signIn_Elements.submitBtn().click();
  }
  validateWrongCredentials() {
    signIn_Elements.wrongCredentialsTxt().should("be.visible");
  }
  loginPageTitle() {
    cy.title().should("eq", "OrangeHRM");
  }

  launchSigninPage() {
    cy.visit(Cypress.env("baseUrl"));
  }
}
