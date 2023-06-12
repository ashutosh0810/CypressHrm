// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fillTextbox", (locator, text) => {
  cy.get(locator).clear().type(text);
});
Cypress.Commands.add("clickElement", (selector) => {
  cy.log(" this is click element ", selector);
  cy.get(selector).click();
});
Cypress.Commands.add("selectDropdown", (selector, value) => {
  cy.get(selector).select(value);
});
Cypress.Commands.add("forceclickElement", (selector) => {
  cy.log(" this is force click element ", selector);
  cy.get(selector).click({ force: true });
});
// cypress/support/commands.js
Cypress.Commands.add("writeJsonToFile", (path, data) => {
  cy.writeFile(path, data);
});

Cypress.Commands.add("validatePartialText", (selector, expectedPartialText) => {
  cy.contains(selector)
    .invoke("text")
    .then((text) => {
      // 'text' now contains the text of the found element
      // Now validate it
      expect(text).to.include(expectedPartialText);
    });
});

Cypress.Commands.add("validateText", (selector, expectedText) => {
  cy.get(selector)
    .invoke("text")
    .then((text) => {
      expect(text).to.eq(expectedText);
    });
});

Cypress.Commands.add("handleAppException", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  Cypress.Commands.add("clickelementByTxt", (locator, targetTxt) => {
    cy.get(locator).contains(targetTxt).click();
  });
});
