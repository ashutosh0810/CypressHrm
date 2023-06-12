import pim_Element from "../pageElements/pim_Element";
const locators = require("../../locators_Repo.json");
const testData = require("../../testData.json");
let randomString = Math.random().toString(36).slice(2, 7);
let firstName = "first" + randomString + "Test";
let middleName = "mid" + randomString + "Test";
let lastName = "last" + randomString + "Test";

export default class pimPageOject {
  constructor() {
    globalThis.pim_Elements = new pim_Element();
  }

  clickAddbutton() {
    cy.clickElement(locators.pim.add_Btn);
  }
  enterdeatails() {
    cy.fillTextbox(locators.pim.FirstName, firstName);
    cy.fillTextbox(locators.pim.middleName, middleName);
    cy.fillTextbox(locators.pim.lastName, lastName);
  }
  createLoginDetails() {
    cy.clickElement(locators.pim.createLogin_RadionBtn);
  }

  enterLoginDetails() {
    cy.log(" username text box is ", randomString);
    cy.writeJsonToFile(testData.commonTestData.outData_path, {
      username: randomString,
    });
    cy.fillTextbox(locators.pim.username_Txtbox, randomString);
    cy.fillTextbox(locators.pim.password_TxtBox, testData.pimPage.password);
    cy.fillTextbox(locators.pim.confirmPassword, testData.pimPage.password);
  }
  clickSavebutton() {
    cy.clickElement(locators.pim.submit_Btn);
  }
}
