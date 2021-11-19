describe('CalFunction', function () {
    var calc = require('./calcPOM.js');
    var using = require('jasmine-data-provider');
    var data = require('./data.js');

    beforeEach(function () {
        calc.getURL();
    })

    afterEach(function () {
        console.log('Test is comleted')
    })

    it('sample', function () {



        // browser.get('http://juliemr.github.io/protractor-demo/')
        // calc.getURL();

        // Without POM
        // element(by.model('first')).sendKeys('2')
        // element(by.model('second')).sendKeys('5')
        // element(by.id('gobutton')).click()


        // WITH POM
        
        calc.firstInput.sendKeys('2');
        calc.secondInput.sendKeys('5');
        calc.goButton.click()





        // Jasmine framework automatically takes care promise resolve
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('7');

        // resolving promise to get the text
        // protractor will 90% automatically handle promise
        element(by.css("h2[class='ng-binding']")).getText().then(function (text) {
            console.log(text)
        })

        /*
        // Strong value in text and using assertion
        let text=element(by.css("h2[class='ng-binding']")).getText()
        expect(text).toEqual('7')
         */
    })

    using(data.datadriven, function (data, description) {
        it('DataDriven Testing', function () {

            // Using DataDriven
            calc.firstInput.sendKeys(data.firstInput);
            calc.secondInput.sendKeys(data.secondInput);
            calc.goButton.click()
            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(data.result);

        })
    })

    
});