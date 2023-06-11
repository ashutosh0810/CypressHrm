import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import leftMenu_PO from "../../pageObjects/pageActions/leftMenu_Action";
import admin_page from "../../pageObjects/pageActions/admin_PO";

const adminPage_obj = new admin_page();
const leftmenu_obj = new leftMenu_PO();

When("User click the Admin left option", () => {
  leftmenu_obj.clickLeftOption("Admin");
});

Then("User enter a name in the userNmae", () => {
  adminPage_obj.enterUsername();
});

Then("User click on search button", () => {
  adminPage_obj.clickSearch();
});

Then("User validate the user exists", () => {
  cy.log(" alidate the user exist");
  adminPage_obj.validateRecord();
});

Then("User delete the record", () => {
  cy.log(" Delete the existing record ");
  adminPage_obj.deleteRecord();
});
