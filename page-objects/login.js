/*eslint-disable */
// nightwatch does not support arrows, disabling eslint for this file
/**
 * @author Lizeth Heredia <lizeth.heredia@wizeline.com>
 * @description Login Page web elements Page Object.
 */

module.exports = {
  url: function () {
    return `${this.api.launchUrl}login/`;
  },

  elements: {
    loginEmail: {
      selector: '#email'
    },
    loginPassword: {
      selector: '#pass'
    },
    loginButton: {
      selector: '#loginbutton',
    },
  },

  commands: [{
    logIn: function (email, password) {
      return this
        .enterText('@loginEmail', email)
        .enterText('@loginPassword', password)
        .clickToElement('@loginButton')
    }
  }]
};
