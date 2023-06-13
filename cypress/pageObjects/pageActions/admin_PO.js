const locators = require("../../locators_Repo.json");
const outData = require("../../../cypressoutputData.json");
const testData = require("../../testData.json");
export default class adminPage {
  // This function will enter the userName
  enterUsername() {
    cy.log(" read the data from output ", outData.username);
    cy.fillTextbox(locators.admin.username_txt, outData.username);
  }
  // This function will search click
  clickSearch() {
    cy.forceclickElement(locators.admin.search_Btn);
    cy.wait(7000);
  }
  // This will validate record
  validateRecord() {
    cy.validatePartialText(
      locators.admin.rec,
      testData.adminPgaeTestdata.validPartialtxt
    );
  }

  // Will delete record from searched one
  deleteRecord() {
    cy.forceclickElement(locators.admin.deleteIcon);
    cy.clickElement(locators.admin.yesDelete);
  }

  // select the drop down on admin page
  userRoleDropDown() {
    cy.get(locators.admin.userRole_DropDown).click();
    cy.log(" check visibility of the dropdown");
    cy.get(locators.admin.userRoleOption_DropDown)
      .contains(testData.adminPgaeTestdata.userRole)

      .should("be.visible")
      .click();
    cy.forceclickElement(locators.pim.submit_Btn);
  }
}
