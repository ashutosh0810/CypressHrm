import sign from "../pageObjects/pageActions/signin_PO";
const ob = new sign();
describe("Login functionality Test2 ", function () {
  it("dropdown testing  ", function () {
    //
    cy.visit(Cypress.env("baseUrl"));
    ob.enterCredentials("Admin", "admin123");

    // click admin
    cy.get("a[href='/web/index.php/admin/viewAdminModule']").click();
    // click role
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    // select ess
    cy.get(".oxd-select-option span").contains("Admin").click();
    // click search
    cy.get("button[type='submit']").click({ force: true });
    cy.wait(5000);
    // edit first wala
    cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon")
      .first()
      .click({ force: true });
    // entertext

    // save
    cy.get("button[type='submit']").click();
    cy.window().then((win) => {
      cy.stub(win, "location").as("windowStub");
    });
    cy.wait(5000);
    // validate success
    cy.get("oxd-toast-content oxd-toast-content--success")
      .contains("Success")
      .should("be.visible");
  });
});
