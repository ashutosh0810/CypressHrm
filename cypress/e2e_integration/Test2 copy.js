describe("Login functionality Test2 ", function () {
  it("Valid login", function () {
    //
    cy.visit(Cypress.env("baseUrl"));
    cy.log(" this will validate the username text box ");
    cy.get("input[name='username']").should("be.hidden");
  });
});
