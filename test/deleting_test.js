

var assert = require('assert');
var MarioChar = require('../models/mariochar');


describe('deletes one database record', function(){
var char
 beforeEach(function(done){
     char = new MarioChar({
        name: 'Mario'
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
    
    it('delete one data from the datbase', function(done){
      MarioChar.findOneAndRemove({name: 'Mario'}).then(()=>{
          MarioChar.findOne({name:'Mario'}).then(res=>{
            assert(res === null);
          })
         
         
      })
      done();
})
})


