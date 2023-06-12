import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import newTab_PO from "../../pageObjects/pageActions/newTab_PO";

const newTab_obj = new newTab_PO();

Given("User launch the Make my trip application", () => {
  newTab_obj.launchurl();
});

When("User click on superoffer link", () => {
  newTab_obj.clickonoffer();
});
Then("new tab should be open and user validate the target", () => {
  newTab_obj.validateNewPage();
});
