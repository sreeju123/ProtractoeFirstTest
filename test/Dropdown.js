describe('Dropdown demo', function(){

    function calculation(a,b,c){
        element(by.model('first')).sendKeys(a)
        element(by.model('second')).sendKeys(b)
        

        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(values){
                if(values==c){
                    item.click();
                }
            })
        })

        element(by.id('gobutton')).click()
    }
    
    
        it('Dropdown Selection', function(){
    
            browser.get('http://juliemr.github.io/protractor-demo/')

            calculation(2,4,"ADDITION");
            calculation(3,5,"DIVISION");
            calculation(12,6,"MODULO");
            calculation(4,7,"MULTIPLICATION");
            calculation(10,8,"SUBTRACTION");

            element.all(by.tagName('option')).each(function(item){
                item.getAttribute('value').then(function(values){
                    console.log(values)
                })
            })
        })
    })