const { waitForConditionTimeout } = require('../globals');
/**
   * @description Wait for element to be visible then perform click
   * @method clickToElement
   * @param {webElement}  selector
    */
exports.command = function (selector) {
    this
        .waitForElementPresent(selector, waitForConditionTimeout)
        .click(selector);
    return this.api;
};
