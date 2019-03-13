/**
 * @author Lizeth Heredia <lizeth.heredia@wizeline.com>
 * @description Valid Credentials Login Spec Test
 */
const { facebookUsername, facebookPassword } = require('../../globals');

module.exports = {
    'Critical Tests: Successful Login - Valid User': (browser) => {
        const loginPage = browser.page.login();
        const wallPage = browser.page.wall();
        loginPage.navigate()
            .logIn(facebookUsername, facebookPassword);
        wallPage.verifyFeedsContainer();
    },
};
