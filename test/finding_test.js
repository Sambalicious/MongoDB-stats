

var assert = require('assert');
var MarioChar = require('../models/mariochar');


describe('finding one database records', function(){
var char
 beforeEach(function(){
     char = new MarioChar({
        name: 'Mario'
    });

    char.save().then(function(done){
         ///new instance of the model
           ////assert to confirm if the data is new 
        
        ////mocha doesnt know when the test is complate since it is asynchronous
        ///pass done as a parameter and use it  
        assert(char.isNew === false);
      
        done();                
    })
 })
    it('finds records with objectsID', function(done){
        ////finding data by boject ID
        MarioChar.findOne({_id: char._id}).then(function(res){
            //either you convert the result to string and pass done inside the same block
            //or you just pass done outside the re block

            assert(res._id === char._id);
            
        })
        done();
        
    })

    it('finds data with name parameter', function(done){
        MarioChar.findOne({name: 'Mario'}).then(res=>{
            assert(res.name === 'Mario');
        })
        done();
    })
})


