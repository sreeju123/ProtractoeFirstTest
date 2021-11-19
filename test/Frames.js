describe('Frames Demo', function(){
    it('Non Angular Frames Website', function(){

        browser.waitForAngularEnabled(false);
        //  Maximize the browser
        // browser.driver.manage().window().maximize();
        browser.get("https://rahulshettyacademy.com/AutomationPractice/");

        // Switch to Iframe using id/name
        browser.switchTo().frame("courses-iframe");

        element(by.css("a[href*='sign_in']")).getText().then(function(text){
            console.log(text)
        })


    })
})