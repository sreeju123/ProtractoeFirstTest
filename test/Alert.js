describe('Alert Demo', function(){
    it('Non Angular Alert Website', function(){

        browser.waitForAngularEnabled(false);
        browser.get("https://rahulshettyacademy.com/AutomationPractice/");
        element(by.id('confirmbtn')).click();

        // Clicks Ok button
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(2000)
        })

        // Clicks Cancel button
        /* 
        browser.switchTo().alert().dismiss().then(function(){
            browser.sleep(2000)
        })
        */

        // browser.switchTo().alert().then(function(ele){
        //     ele.accept();
        //     browser.sleep(2000)
        // })

    })
})