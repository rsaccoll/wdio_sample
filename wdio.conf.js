const takeScreenshot = require("./utils/helper").takeScreenshot
exports.config = {
  runner: "local",
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  specs: [
    "./test/specs/**/*.js"
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: "chrome",
  }],
  logLevel: "info",
  bail: 0,
  baseUrl: "https://bitso.com/",
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: [["allure", {
    outputDir: "./logs/results/",
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
  }]],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000
  },

  afterTest(test) {
    if (test.passed === false) {
      takeScreenshot("./logs/screenshot/", "screenshot_fail.png")
    }
  }
}
