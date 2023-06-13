const locators = require("../../locators_Repo.json");
const testData = require("../../testData.json");

export default class newTabPage {
  // This will launch url
  launchurl() {
    cy.handleAppException();
    cy.visit(Cypress.env("newTaburl"));
  }
  // Click on offer
  clickonoffer() {
    cy.get(locators.mmtLocator.offer_link)
      .invoke("removeAttr", testData.newTabTestcase.attributeRmv)
      .click();
  }
  // This will validate whether a new page is opened or not
  validateNewPage() {
    cy.url().should("include", testData.newTabTestcase.newPageUrl);
    cy.validateText(
      locators.mmtLocator.amazingOffr_txt,
      testData.newTabTestcase.Offertxt
    );
    cy.get(locators.mmtLocator.flightOffer)
      .contains(testData.newTabTestcase.findBytxt)
      .click();
    cy.url().should("include", testData.newTabTestcase.flightOfferurl);
    cy.go("back");
    cy.go("back");
    cy.url().should("include", Cypress.env("newTaburl"));
  }
}
