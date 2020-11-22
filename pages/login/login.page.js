function loginElements() {
  return {
    email: function() { return $("#client_id") },
    password: function() { return $("#password") },
    submitButton: function() { return $("//button[@type='submit']") },
    errorMessage: function() { return $("#error") }
  }
}

function loginMethods() {
  const element = loginElements()

  return {
    setInfoLogin: function(emailParam) {
      element.email().waitForExist()
      element.email().clearValue()
      element.email().setValue(emailParam)
    },

    setInfoPassword: function(password){
      element.password().clearValue()
      element.password().setValue(password)
    },

    confirmLogin: function(){
      element.submitButton().waitForExist()
      element.submitButton().click()
    },
    erroMessageWait: function() {
      element.errorMessage().waitForExist()

    }
  }
}

function login() {
  const login = loginMethods()

  return {
    fillForm: function(objLogin) {
      login.setInfoLogin(objLogin.email)
      login.setInfoPassword(objLogin.password)
      login.confirmLogin()
      login.erroMessageWait()
    }
  }
}

module.exports = login()


/*
    errorPresented: function(){
      element.errorMessage().waitForExist()
      element.errorMessage().getText()
    }

     errorMessage: function() { return $("#error")}
*/