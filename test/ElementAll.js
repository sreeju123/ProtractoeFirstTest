describe('Element All Demo', function(){

function Add(a,b){
    element(by.model('first')).sendKeys(a)
    element(by.model('second')).sendKeys(b)
    element(by.id('gobutton')).click()
}


    it('Element All', function(){

        browser.get('http://juliemr.github.io/protractor-demo/')
    // repeater, chain locator, and css for identical tags


    // Removing for code optimization
        /*element(by.model('first')).sendKeys('2')
        element(by.model('second')).sendKeys('4')
        element(by.id('gobutton')).click()

        element(by.model('first')).sendKeys('3')
        element(by.model('second')).sendKeys('5')
        element(by.id('gobutton')).click()

        element(by.model('first')).sendKeys('4')
        element(by.model('second')).sendKeys('6')
        element(by.id('gobutton')).click()*/

        Add(2,4);
        Add(3,5);
        Add(4,6);
        Add(4,7);
        Add(6,8);

    // Prints the count of elements
        /*element.all(by.repeater('result in memory')).count().then(function(text){
            console.log(text)
        })*/

    // Prints the all the elements using each(), by traverse through each element
        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css('td:nth-child(3)')).getText().then(function(text){
                console.log(text)
            })
        })

    })
})