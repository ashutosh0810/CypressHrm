import signIn_Element from "../pageElements/signIn_Element";
import leftMenu_Element from "../pageElements/leftMenu_Element";
export default class leftMenuAction {
  constructor() {
    globalThis.leftmenu_Elements = new leftMenu_Element();
  }

  clickLeftOption(menuOption) {
    cy.log("This will click the menuOption as pased ", menuOption);
    if (menuOption == "PIM") {
      cy.log(" click pim menu");
      leftmenu_Elements.pimlink().click();
    }
  }
}
