const Page = require('./BasePage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPageNew extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

module.exports = new LoginPageNew();
