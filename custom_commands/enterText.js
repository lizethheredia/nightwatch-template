const { waitForConditionTimeout } = require('../globals');
/**
   * @description Wait for element to be visible then setValue.
   * @method enterText
   * @param {webElement} selector
   * @param {String} text
   */
exports.command = function (selector, text) {
    this
        .waitForElementPresent(selector, waitForConditionTimeout)
        .setValue(selector, text);
    return this.api;
};
