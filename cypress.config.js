const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  projectId: "vbqy7g",
  env: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    userId: "Admin",
    password: "admin123",
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents,
    watchForFileChanges:true,
    //specPattern: ["cypress/e2e_integration/*.js"],
    //specPattern: ["cypress/e2e_integration/feature/*.feature"],
    specPattern: "cypress/e2e_integration/feature/*.feature",
    // baseUrl: "https://opensource-demo.orangehrmlive.com/",
  },
});
