describe('Protractor Synchronization Demo', function(){
    it('Non Angular Synchronization Website', function(){

        browser.waitForAngularEnabled(false);
        browser.get('https://www.itgeared.com/demo/1506-ajax-loading.html');

        element(by.css("a[href*='loadAjax']")).click();

        //  Declaring ExpectedConditions
        var EC = protractor.ExpectedConditions;

        // For browser.wait(arg1, arg2) first arg- EC with elemet and second arg- timeout
        // Wait until an element is invisible
        browser.wait(EC.invisibilityOf(element(by.id('loader'))), 8000)

        element(by.id('results')).getText().then(function(text){
            console.log(text)
        })

    })
})