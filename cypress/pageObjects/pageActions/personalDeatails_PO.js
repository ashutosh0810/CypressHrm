const locators = require("../../locators_Repo.json");

export default class personalDetails_PO {
  enterPersonalDetails() {
    cy.wait(7000);
    cy.forceclickElement(locators.personalDetails.gender_RadioBtn);
  }
  clickSaveBtn() {
    cy.clickElement(locators.personalDetails.save_Btn);
  }
}
