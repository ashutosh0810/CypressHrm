import signIn_Element from "../pageElements/signIn_Element";
import leftMenu_Element from "../pageElements/leftMenu_Element";

const locators = require("../../locators_Repo.json");
const testData = require("../../testData.json");

export default class leftMenuAction {
  constructor() {
    globalThis.leftmenu_Elements = new leftMenu_Element();
  }

  clickLeftOption(menuOption) {
    cy.log("This will click the menuOption as pased ", menuOption);
    if (menuOption == "PIM") {
      //cy.log("selectors is ", locators.leftmenu.pimLeft_Btn);
      cy.log(" click pim menu");
      //leftmenu_Elements.pimlink().click();

      cy.clickElement(locators.leftmenu.pimLeft_Btn);
    }
    if (menuOption == "Admin") {
      cy.log(" click Admin  menu");
      //leftmenu_Elements.pimlink().click();

      cy.clickElement(locators.leftmenu.adminleft_Btn);
    }
  }

  readOutputFile() {}
}
