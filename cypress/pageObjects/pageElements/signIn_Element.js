const locators = require("../../locators_Repo.json");

export default class signIn_Element {
  usernameTxtBx() {
    return cy.get(locators.loginPage.userName_Txt);
  }
  passwordTxtBx() {
    return cy.get(locators.loginPage.password_Txt);
  }
  submitBtn() {
    return cy.get(locators.loginPage.submit_Btn);
  }
  forgetPasswordLnk() {
    return cy.get(locators.loginPage.forgetPwd_Lnk);
  }
  wrongCredentialsTxt() {
    return cy
      .get(locators.loginPage.badCredentails_Txt)
      .contains("Invalid credentials");
    //.should("be.visible");
  }
}
