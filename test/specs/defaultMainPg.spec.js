const defaultMainPg = require('../pageobjects/MainPage');
const expected = require("../data/expected");


describe('MAIN PAGE BY DEFAULT', () => {

    describe("ELEMENTS DISPLAYED",() =>{

        it('01 should have right title "Local Coding"', function () {
            defaultMainPg.open();
            expect(browser.getTitle()).equal(expected.localCodingText);
        });

        it('02 should have right home page link', function () {
            expect(defaultMainPg.homePgLink.isDisplayed()).true;
        });

        it('03 should have clickable home page and click', function () {
            expect(defaultMainPg.homePgLink.isClickable()).true;
            expect(defaultMainPg.homePgLink.click());
        });

        it('04 should have displayed and clickable login link', function () {
            expect(defaultMainPg.loginLink.isDisplayed()).true;
            expect(defaultMainPg.loginLink.isClickable()).true;
            expect(defaultMainPg.loginLink.click());
            expect(defaultMainPg.homePgLink.click());
        });

        it('05 should have displayed and clickable register link', function () {
            expect(defaultMainPg.registerLink.isDisplayed()).true;
            expect(defaultMainPg.registerLink.isClickable()).true;
            expect(defaultMainPg.registerLink.click());
            expect(defaultMainPg.homePgLink.click());
        });

        it('06 should have displayed and clickable register link', function () {
            expect(defaultMainPg.registerLink.isDisplayed()).true;
            expect(defaultMainPg.registerLink.isClickable()).true;
            expect(defaultMainPg.registerLink.click());
            expect(defaultMainPg.homePgLink.click());
        });

        it('07 should have right h1 Local Coding community', function () {
            expect(defaultMainPg.h1HomePage.getText()).equal(expected.h1HomePg);
        });
        it('08 should have right h2 Who we are', function () {
            expect(defaultMainPg.h2Who.getText()).equal(expected.whoWeAre);
        });
        it('09 should have right h3 What we do', function () {
            expect(defaultMainPg.h2What.getText()).equal(expected.whatWeDo);
        });

        it('10 should have right h4 Teaching paradigm', function () {
            expect(defaultMainPg.h2Teaching.getText()).equal(expected.teachingParadigm);
        });

        it('11 should have right contact us link', function () {
            expect(defaultMainPg.contactUsLink.isClickable()).true
        });
        it('12 should have right terms link', function () {
            expect(defaultMainPg.termsLink.isClickable()).true
        });
        it('13 should have right privacy link', function () {
            expect(defaultMainPg.privacyLink.isClickable()).true
        });

    })

});