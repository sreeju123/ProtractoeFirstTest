
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// An example configuration file.
exports.config = {
  // seleniumAddress:'https://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../test/calculator.js'],
  /* Test class Names
    calculator
    ChainLocator
    ElementAll
    Dropdown
    Alert
    Frames
    Sync
    AngularPractice
  */

  onPrepare: function () {
    browser.driver.manage().window().maximize();

    // For Reporting
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },
  suites:
  {
    Smoke: ['../test/ChainLocator.js', '../test/Frames.js', '../test/Sync.js']
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
