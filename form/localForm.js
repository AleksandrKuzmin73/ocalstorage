/**
 * Created by Aleksandr Kuzmin on 24.11.2017.
 */
var localForm = function() {
    var url = 'https://smartstaff.simbirsoft1.com/',
        EC = protractor.ExpectedConditions,
        elementConfirmPage = element (by.xpath('//div[@class="image-wrapper"]')),
        buttonSubmit = element (by.xpath('//button[@type="submit"]')),
        loginForm = element (by.xpath('//input[@ng-model="vm.auth.username"]')),
        passForm = element (by.xpath('//input[@ng-model="vm.auth.pass"]'));


    this.getSite = function () {
        browser.get(url);
        browser.driver.manage().window().maximize();
    };

    this.auth = function (login,password) {
        loginForm.sendKeys(login);
        passForm.sendKeys(password);
        buttonSubmit.click();
        browser.wait(EC.visibilityOf(elementConfirmPage), 5000);
    };

    this.getAttribute = function () {
        browser.executeScript("return localStorage.getItem('ngStorage-user');").then(function (value) {
            json_data = JSON.parse(value);
            console.log('Имя: ' + json_data.employee.firstName);
            console.log('Фамилия: ' + json_data.employee.lastName);
            console.log('Скайп: ' + json_data.employee.skype);
            console.log('Номер телефона: ' + json_data.employee.phone);
            console.log('Уровень английского: ' + json_data.employee.englishLevel);
            console.log('Список ролей:');
            console.log('- ' + json_data.roles[0].name);
            console.log('- ' + json_data.roles[1].name);
        });
    };

};
module.exports = localForm;