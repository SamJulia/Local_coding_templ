module.exports = {

    firstNameInput: "John",
    lastNameInput: "From",
    emailInputField: "qa6@gmaail.com",
    passwordInputField: "12341234",
    checkBoxAgreement: "Return",
}

module.exports = {

    h1HomePg: "Local Coding community",
    localCodingText: "Local Coding",
    whoWeAre: "Who we are",
    whatWeDo: "What we do",
    teachingParadigm: "Teaching paradigm",
}

const faker = require('faker');
let firstName = faker.name.firstName();

console.log('+++++++++++++++++++++++++++++++++++', firstName, "+++++++++++++++++++++++++++++++++++++++++++")


let lastName = faker.name.lastName();
let jobTitle = faker.name.jobTitle();
let prefix = faker.name.prefix();
let suffix = faker.name.suffix();
let jobArea = faker.name.jobArea();
let email = faker.internet.email();
let phone = faker.phone.phoneNumber();
let password = "QWe" + Math.trunc(new Date().getTime() / 10000 ) + "!$";

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Job area: ${jobArea}`);
console.log(`Phone: ${phone}`);
console.log(`Email: ${email}`);
console.log(`Password: ${password}`);

