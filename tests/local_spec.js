describe ("Test localStore", function(){
    var common = require('../config/common.js'),
        login = 'randomLogin',
        password = 'randomPassword',
        localForm = new common.localForm();
        browser.waitForAngularEnabled(false);

    beforeEach(function () {
        localForm.getSite();
    });

    // 1.Создание скрина;
    it("localStoreFirstTest", function () {
        localForm.auth(login, password);
        localForm.getAttribute();
    });

});