describe('Chain Locator Demo', function(){

    it('sample', function(){

        browser.get('http://juliemr.github.io/protractor-demo/')
        // repeater, chain locator, and css for identical tags

        element(by.model('first')).sendKeys('2')
        element(by.model('second')).sendKeys('5')
        element(by.id('gobutton')).click()

        

        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
            console.log(text)
        })

        // Select dropdown value
        // element(by.model('operator')).element(by.css('option:nth-child(4)')).click()



    })
})