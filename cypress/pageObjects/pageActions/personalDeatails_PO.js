const locators = require("../../locators_Repo.json");

export default class personalDetailsPage {
  // this will enter the personalDetails like gender selection etc
  enterPersonalDetails() {
    cy.wait(7000);
    cy.forceclickElement(locators.personalDetails.gender_RadioBtn);
  }
  clickSaveBtn() {
    cy.clickElement(locators.personalDetails.save_Btn);
  }
}
