/*eslint-disable */
// nightwatch does not support arrows, disabling eslint for this file
/**
 * @author Lizeth Heredia <lizeth.heredia@wizeline.com>
 * @description Wall Page web elements Page Object.
 */

const { waitForConditionTimeout } = require('../globals')
module.exports = {
  url: function () {
    return this.api.launchUrl + 'authentication/';
  },

  elements: {
    feedContainer: {
      selector: '#userNav'
    },
  },

  commands: [{
    verifyFeedsContainer: function () {
      return this
        .waitForElementVisible('@feedContainer', waitForConditionTimeout)
        .assert.visible('@feedContainer')
    },
  }]
};
