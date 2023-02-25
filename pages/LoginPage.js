const { I } = inject();

module.exports = {

  // Set locators
  fields: {
  loginform: "#login_form",
  username: "#user_login",
  password: "#user_password",
  submitButton: ".btn-primary",
},

  // create methods
  submitLogin(username, password) {
    I.fillField(this.fields.username, username)
    I.fillField(this.fields.password, password)

    I.click(this.fields.submitButton)
  },

  assertLoginform() {
    I.seeElement(this.fields.loginform)
  }
}
