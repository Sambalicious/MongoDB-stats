
var assert = require('assert');
var MarioChar = require('../models/mariochar');






describe('saving records', function(){

    ///create test here

    it('saves record to database', function(done){
         ///new instance of the model
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){
            
             ////assert to confirm if the data is new 
            assert(char.isNew === false);
               
        })
            ////mocha doesnt know when the test is complate since it is asynchronous
            ///pass done as a parameter and use it   
            done();    

    })
})


