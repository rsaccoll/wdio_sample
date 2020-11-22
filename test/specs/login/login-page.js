const assert = require("assert")
const loginPage = require("../../../pages/login/login.page")
const homePage = require("../../../pages/home/home.page")
const helper = require("../../../utils/helper")
const data = require("../../../resources/login/login")

describe("Wdio practice login page", function() {
  before(function (){
    browser.url("")
  })

  it("Test invalid input o login page", function() {
    homePage.loginButtonClick()
    loginPage.fillForm(data.invalid_credencials)

    assert.strictEqual(helper.getBrowserTitle(), data.invalid_credencials.assertion_title)
    assert.strictEqual(helper.getErrorAlert, data.invalid_credencials.assertion_page)

    helper.takeScreenshot("./logs/screenshot/", "invalid_login.png")
  });
});