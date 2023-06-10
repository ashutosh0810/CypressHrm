describe("Login functionality Test2 ", function () {
  it("Valid login", function () {
    //
    cy.visit(Cypress.env("baseUrl"));
    cy.log(" this will validate tthe forget password link visibility");
    cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should(
      "be.visible"
    );
  });
});
