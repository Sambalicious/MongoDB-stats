

var assert = require('assert');
var MarioChar = require('../models/mariochar');


describe('update database record', function(){
var char
 beforeEach(function(done){
     char = new MarioChar({
        name: 'Mario',
        age: 60
    });

    char.save().then(function(){
         ///new instance of the model
           ////assert to confirm if the data is new 
        
        ////mocha doesnt know when the test is complate since it is asynchronous
        ///pass done as a parameter and use it  
        ///your best bet is to pass done outside res block
        assert(char.isNew === false);
      
        done();                
    })
 })
    
   it('update one data from the datbase', function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'},{name: 'Tech bros'}).then(()=>{
                MarioChar.findOne({_id: char_id}).then(res=>{
                        assert(res.name === 'Tech bros')
                })
        })        
      done();
})


//////updating operator
it('increament weight by one ', function(done){
    MarioChar.update({}, {$inc:{age:1 }}).then(() => {
        MarioChar.findOne({name: 'Mario'}).then(res=>{
            assert(res.age === 61);
        })
        done();
    })
})


})