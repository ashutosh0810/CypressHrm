import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import leftMenu_PO from "../../pageObjects/pageActions/leftMenu_PO";
import admin_page from "../../pageObjects/pageActions/admin_PO";
import pim_page from "../../pageObjects/pageActions/pim_PO";

const adminPage_obj = new admin_page();
const leftmenu_obj = new leftMenu_PO();
const pim_ob = new pim_page();

Before(() => {
  cy.log(" This will get execute before each test");
});
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
  cy.log("validate the user exist");
  adminPage_obj.validateRecord();
  cy.screenshot("record exists");
});

Then("User delete the record", () => {
  cy.log(" Delete the existing record ");
  adminPage_obj.deleteRecord();
});

Then("User select the user role from dropdown", () => {
  adminPage_obj.userRoleDropDown();
});

Then("User Edit the first record", () => {
  pim_ob.editrecord();
});
//User click the save
Then("User click the save", () => {
  pim_ob.clickforceSavebutton();
});

Then("User validate the success message", () => {});

// Take a screenshot
