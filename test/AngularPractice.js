const { ExpectedConditions, browser, element, by } = require("protractor");

describe('Angular Practice Demo', function () {

    // Function to select items
    function selectItems(itemName) {
        // Store all the items in list
        element.all(by.tagName("app-card")).each(function (item) {
            // get the title
            item.element(by.css("h4[class='card-title'] a")).getText().then(function (text) {
                if (text == itemName) {
                    // Clicks based on the text
                    item.element(by.css("button[class='btn btn-info']")).click();
                }
            })
        })
    }

    it('Angular Practice Website', function () {

        browser.manage().window().maximize();
        browser.get('https://rahulshettyacademy.com/angularpractice/');

        element(by.name("name")).sendKeys("Sree");
        element(by.css("input[class='form-control ng-untouched ng-pristine ng-invalid']")).sendKeys("Sree@gmail.com");
        element(by.css("input[id='exampleInputPassword1']")).sendKeys("Sree@gmail.com");
        element(by.css("input[id='exampleCheck1']")).click();
        element(by.css("input[id='inlineRadio1']")).click();
        element(by.css("input[class='btn btn-success']")).click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.css("div[class='alert alert-success alert-dismissible']"))), 5000)
        var successMessage = element(by.css("div[class='alert alert-success alert-dismissible']"))

        expect(successMessage.getText()).toEqual("×\nSuccess! The Form has been submitted successfully!.")

        element(by.linkText('Shop')).click();

        // Calling Custom function
        selectItems("Blackberry")
        selectItems("Nokia Edge")

        // Getting count of checkout items from button
        element(by.partialLinkText("Checkout")).getText().then(function (text) {
            var res = text.split("(");
            expect(res[1].trim().charAt(0)).toBe("2");
        })

        element(by.partialLinkText("Checkout")).click()


        element(by.css("table[class='table table-hover'] tr:nth-child(1) td:nth-child(4) strong")).getText().then(function (text) {
            var item1 = text.split(". ")
            console.log(item1[1])

            element(by.css("table[class='table table-hover'] tr:nth-child(2) td:nth-child(4) strong")).getText().then(function (text1) {
                var item2 = text1.split(". ")
                console.log(item2[1])

                element(by.css("table[class='table table-hover'] tr:nth-child(3) td:nth-child(5) strong")).getText().then(function (text2) {
                    var totalItem = text2.split(". ")
                    console.log(totalItem[1])

                    var item11 = Number(item1[1]);
                    var item22 = Number(item2[1]);

                    var total1 = item11 + item22;

                    console.log(total1);

                    expect(Number(total1)).toEqual(Number(totalItem[1]))
                })
            })
        })
    })
})