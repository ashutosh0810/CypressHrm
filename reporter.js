var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "cypress/cucumber-json/*.json",
  output: "cypress/reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);
