if (!process.env.BROWSERSTACK_USER || process.env.BROWSERSTACK_USER.trim() === ''
    || !process.env.BROWSERSTACK_ACCESSKEY || process.env.BROWSERSTACK_ACCESSKEY.trim() === ''
    || !process.env.FACEBOOK_USERNAME || process.env.FACEBOOK_USERNAME.trim() === ''
    || !process.env.FACEBOOK_PASSWORD || process.env.FACEBOOK_PASSWORD.trim() === '') {
    console.error(`
        Error - Please set the proper environment variables.

        For example, add this to your ~/.bashrc or ~/.bash_profile:
        
        export BROWSERSTACK_USER="johndoe"
        export BROWSERSTACK_ACCESSKEY="xxxxxxxxx"
        export FACEBOOK_USERNAME="john.doe@sheerid.com"
        export FACEBOOK_PASSWORD="xxxxxxxx"
        export SAUCE_USERNAME="johndoe"
        export SAUCE_ACCESS_KEY="xxxxxxxxx"
        
        See https://www.browserstack.com/automate/nightwatch#integration-with-browserstack for more information about the Browserstack ones.
    `);
    process.exit();
}
const useCloud = process.env.IS_CLOUD === 'true';
const browserStackUser = process.env.BROWSERSTACK_USER;
const browserStackKey = process.env.BROWSERSTACK_ACCESSKEY;
const sauceLabsUser = process.env.SAUCE_USERNAME;
const sauceLabsKey = process.env.SAUCE_ACCESS_KEY;
const facebookUsername = process.env.FACEBOOK_USERNAME;
const facebookPassword = process.env.FACEBOOK_PASSWORD;
const abortOnAssertionFailure = false;
const waitForConditionPollInterval = 5000;
const waitForConditionTimeout = 6000;



module.exports = {
    useCloud,
    browserStackUser,
    browserStackKey,
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
        browser
          .sauceEnd()
          .end();
        done();
    },
};
