require('dotenv').config();
const useCloud = process.env.IS_CLOUD === 'true';
const sauceLabsUser = process.env.SAUCE_USERNAME;
const sauceLabsKey = process.env.SAUCE_ACCESS_KEY;
const facebookUsername = process.env.FACEBOOK_USERNAME;
const facebookPassword = process.env.FACEBOOK_PASSWORD;
const abortOnAssertionFailure = false;
const waitForConditionPollInterval = 5000;
const waitForConditionTimeout = 6000;

module.exports = {
    useCloud,
    sauceLabsUser,
    sauceLabsKey,
    facebookUsername,
    facebookPassword,
    abortOnAssertionFailure,
    waitForConditionPollInterval,
    waitForConditionTimeout,
    //HOOKS
    beforeEach(browser, done) {
        browser.resizeWindow(1280, 800, done);
    },
    afterEach(browser, done) {
        browser.end();
        done();
    },
};
