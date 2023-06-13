import signIn_Element from "../pageElements/signIn_Element";
const locators = require("../../locators_Repo.json");
const testData = require("../../testData.json");
let randomString = Math.random().toString(36).slice(2, 7);
export default class signinPage {
  constructor() {
    globalThis.signIn_Elements = new signIn_Element();
  }

  // this will enter the credentials and do the validation
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
    cy.title().should("eq", testData.signInPage.pageTitle);
  }

  launchSigninPage() {
    cy.visit(Cypress.env("baseUrl"));
  }

  validateInvalidCreden() {
    cy.validateText(
      locators.loginPage.invalidCred_txt,
      testData.signInPage.partialtxt
    );
  }

  clickforgetpwd() {
    cy.clickElement(locators.loginPage.forgetPwd_Lnk);
  }
  resetDetailSubmit() {
    cy.fillTextbox(locators.loginPage.resetPwdUser_Txt, randomString);
    cy.clickElement(locators.loginPage.reset_Btn);
  }
  validateResetSucc() {
    cy.validateText(
      locators.loginPage.resetSucces_Txt,
      testData.signInPage.pwdResetSuccessTxt
    );
  }
}
