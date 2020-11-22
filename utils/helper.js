const fs = require("fs");

function takeScreenshot(path, image) {

  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.info("File path doesn't exists ... Let's create!")
      fs.mkdir(path, {recursive: true}, err => {})
    }
    // file exists
    browser.saveScreenshot(path + image)
  })
}

function getBrowserTitle() {
  return browser.getTitle()
}

function getErrorAlert() {
  return $("#error").getText()
}

module.exports = {
  takeScreenshot,
  getBrowserTitle,
  getErrorAlert
}

// //div[@class='styles__Message-vmzast-2 kdoYrG']