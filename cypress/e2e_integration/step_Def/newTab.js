import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import newTab_PO from "../../pageObjects/pageActions/newTab_PO";

const newTab_obj = new newTab_PO();
// This is before Hook of cucumber just like Before of Cypress
//No way to restrict the hook to run only for a particular feature

// Before(() => {
//   cy.log(" THis is the before hook Not implemented ");
// });
Given("User launch the Make my trip application", () => {
  newTab_obj.launchurl();
});

When("User click on superoffer link", () => {
  newTab_obj.clickonoffer();
});
Then("new tab should be open and user validate the target", () => {
  newTab_obj.validateNewPage();
});
