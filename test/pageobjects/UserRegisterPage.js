const BasePage = require('./BasePage');
//const expected = require("../data/expected");
const expected = require("../data/users.json");

class UserRegisterPage extends BasePage {

    get registerLinkMainPg() { return $('[href="/user/register"]')}
    get userFirstNameField () { return $('#user_login_firstName')}
    get userLastNameField () { return $('#user_login_lastName')}
    get emailField () { return $('#user_login_email')}
    get passwordField () { return $('#user_login_password')}
    get checkBoxAgreement () { return $('#user_login_agreement')}
    get registerBtn () { return $('[type="submit"]')}

    get loginBtn() {return $('[href="/user/login"]')}
    get inputUsername () { return $('#normal_login_email') }
    get inputPassword () { return $('#normal_login_password') }
    get btnSubmit () { return $('button[type="submit"]') }


    registration () {
        this.userFirstNameField.setValue(expected.registerNewUser.firstNameInput);
        this.userLastNameField.setValue(expected.registerNewUser.lastNameInput);
        this.emailField.setValue(expected.registerNewUser.emailInputField);
        this.passwordField.setValue(expected.registerNewUser.passwordInputField);
        this.checkBoxAgreement.click();
        this.registerBtn.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new UserRegisterPage();
