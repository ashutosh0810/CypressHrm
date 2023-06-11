const locators = require("../../locators_Repo.json");
const outData = require("../../../cypressoutputData.json");

export default class adminPage {
  enterUsername() {
    cy.log(" read the data from output ", outData.username);
    cy.fillTextbox(locators.admin.username_txt, outData.username);
  }
  clickSearch() {
    cy.forceclickElement(locators.admin.search_Btn);
    cy.wait(7000);
  }
  validateRecord() {
    cy.validatePartialText(locators.admin.rec, "Record Found");
  }
  deleteRecord() {
    cy.forceclickElement(locators.admin.deleteIcon);
    cy.clickElement(locators.admin.yesDelete);
  }
}
