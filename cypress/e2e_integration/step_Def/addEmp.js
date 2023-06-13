import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import leftMenu_PO from "../../pageObjects/pageActions/leftMenu_PO";
import pimPageOject from "../../pageObjects/pageActions/pim_PO";
import personalDetailspageObj from "../../pageObjects/pageActions/personalDeatails_PO";

const leftmenu_obj = new leftMenu_PO();
const pim_obj = new pimPageOject();
const persDetail_obj = new personalDetailspageObj();

When("User click the PIM", function () {
  cy.log("user click the PIM ");
  leftmenu_obj.clickLeftOption("PIM");
});

When("User click the add Button to add the new Employee", () => {
  cy.log(" this will click add button on the PIM page ");
  pim_obj.clickAddbutton();
});

When("User enter the first name middlename last name", () => {
  cy.log(" this is to enter the detal");
  pim_obj.enterdeatails();
});
//createLoginDetails

When("User click the create detail radio button", () => {
  pim_obj.createLoginDetails();
});

Then("User enter the username password and confirm password", () => {
  pim_obj.enterLoginDetails();
});

Then("User click the save button", () => {
  pim_obj.clickSavebutton();
});

Then("User enter the personal details", () => {
  persDetail_obj.enterPersonalDetails();
});
Then("User click the personal details page save button", () => {
  persDetail_obj.clickSaveBtn();
});

Then("User should see success message", () => {
  cy.contains("Success").should("be.visible");
});
