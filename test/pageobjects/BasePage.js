module.exports = class BasePage {

    open (path) {
        browser.url('')
        browser.deleteAllCookies();
    }
}
