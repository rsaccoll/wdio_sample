function homeElements() {
    return {
        login: function() { return $("//span[normalize-space()='Log in']") }
    }
}

function clickLogin() {
    const element = homeElements()

    return {
        clickButtonLogin : function() {
            element.login().waitForExist()
            element.login().click()
        }
    }
}

function home() {
    const homeLoginStuff = clickLogin()

    return {
        loginButtonClick: function() {
            homeLoginStuff.clickButtonLogin()
        }
    }
}

module.exports = home()