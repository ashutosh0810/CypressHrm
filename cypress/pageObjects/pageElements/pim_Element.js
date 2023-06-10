const locators = require("../../locators_Repo.json");
export default class pimelement {
  pimaddButon() {
    return cy.get(locators.pim.add_Btn);
  }
  pimfirstName() {
    return cy.get(locators.pim.FirstName);
  }
  pimmiddleName() {
    return cy.get(locators.pim.middleName);
  }
  pimlastName() {
    return cy.get(locators.pim.lastName);
  }
  pimCreateLoging() {
    return cy.get(locators.pim.createLogin_RadionBtn);
  }
  pimUsername() {
    return cy.get(locators.pim.middleName);
  }
  pimpwd() {
    return cy.get(locators.pim.password_TxtBox);
  }
  pimconfirmpwd() {
    return cy.get(locators.pim.confirmPassword);
  }
  pimsavebutton() {
    return cy.get(locators.pim.middleName);
  }
}
