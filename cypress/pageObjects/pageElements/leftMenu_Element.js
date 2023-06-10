const locators = require("../../locators_Repo.json");

export default class leftMenu_Element {
  pimlink() {
    return cy.get(locators.leftmenu.pimLeft_Btn);
  }
}
