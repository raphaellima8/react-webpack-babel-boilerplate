/* eslint-disable no-undef */
const { SpecReporter } = require('jasmine-spec-reporter');
require('@babel/register');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8080',
  allScriptsTimeout: 15000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(
      new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      })
    );
  },
  capabilities: {
    browserName: 'chrome'
  },
  suites: {
    mainpage: './src/e2e/main/*.spec.js'
  }
};
