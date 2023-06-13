//import { testCaseFinishedHandler } from "@badeball/cypress-cucumber-preprocessor/dist/plugin-event-handlers";
import pim_Element from "../pageElements/pim_Element";
const locators = require("../../locators_Repo.json");
const testData = require("../../testData.json");
let randomString = Math.random().toString(36).slice(2, 7);
let firstName = "first" + randomString + "Test";
let middleName = "mid" + randomString + "Test";
let lastName = "last" + randomString + "Test";

export default class pimPage {
  constructor() {
    globalThis.pim_Elements = new pim_Element();
  }

  // This will click add button , clickElement function is a resusable method under support folder
  clickAddbutton() {
    cy.clickElement(locators.pim.add_Btn);
  }
  // This will enter details , fillTextbox is  is a resusable method under support folder
  enterdeatails() {
    cy.fillTextbox(locators.pim.FirstName, firstName);
    cy.fillTextbox(locators.pim.middleName, middleName);
    cy.fillTextbox(locators.pim.lastName, lastName);
  }
  // This will click on create login button
  createLoginDetails() {
    cy.clickElement(locators.pim.createLogin_RadionBtn);
  }

  // This will enter the login detials
  enterLoginDetails() {
    cy.log(" username text box is ", randomString);

    cy.fillTextbox(locators.pim.username_Txtbox, randomString);
    cy.fillTextbox(locators.pim.password_TxtBox, testData.pimPage.password);
    cy.fillTextbox(locators.pim.confirmPassword, testData.pimPage.password);
    // This will write the username to external file for reusablility
    cy.writeJsonToFile(testData.commonTestData.outData_path, {
      username: randomString,
    });
  }
  clickSavebutton() {
    cy.clickElement(locators.pim.submit_Btn);
  }
  // click the drop down then choose the chief Executive officer
  jobTitleDropDown() {
    cy.get(locators.pim.jobTitlte_DropDwn).click();
    cy.get(locators.pim.jobTitleOptn_Dropdown)
      .contains(testData.pimPage.jobTitleOptions)
      .click();
    cy.forceclickElement(locators.pim.submit_Btn);
  }

  editrecord() {
    cy.get(locators.pim.firstRecordEdit_icon).first().click({ force: true });
  }

  clickforceSavebutton() {
    cy.forceclickElement(locators.pim.submit_Btn);
  }

  // THis will validate the success of entered record
  validateSuccessMsg() {
    cy.get(locators.pim.successTxt)
      .contains(testData.pim.successTxt)
      .should("be.visible");
  }
}
