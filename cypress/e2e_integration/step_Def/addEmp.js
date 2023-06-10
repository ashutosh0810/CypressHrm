import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import leftMenu_PO from "../../pageObjects/pageActions/leftMenu_Action";
import pimPageOject from "../../pageObjects/pageActions/pim_Actions";

const leftmenu_obj = new leftMenu_PO();
const pim_obj = new pimPageOject();

When("User click the PIM", function () {
  cy.log("user click the PIM ");
  leftmenu_obj.clickLeftOption("PIM");
});

When("User click the add Button to add the new Employee", () => {
  cy.log(" this will click add button on the PIM page ");
  pim_obj.clickAddbutton();
});
