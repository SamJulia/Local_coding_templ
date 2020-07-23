const BasePage = require('./BasePage');
const expected = require("../data/users.json");

class defaultMainPg extends BasePage {
    get homePgLink() { return $('.site-name')}
    get loginLink () { return $('[href="/user/login"]')}
    get registerLink () { return $('[href="/user/register"]')}
    get h1HomePage () { return $('h1')}
    get h2Who () { return $$('h2')[0]}
    get h2What () { return $$('h2')[1]}
    get h2Teaching () { return $$('h2')[2]}
    get contactUsLink () { return $('[href="/contact"]')}
    get termsLink () { return $('[href="/terms"]')}
    get privacyLink () { return $('[href="/privacy"]')}

    open() {
        return super.open('/');
    }
}

module.exports = new defaultMainPg();