var mongoose = require('mongoose');

///ES6 promise
mongoose.Promise = global.Promise;
//connect to db before running test
////this is your plug to connect to mongodb database
/////what i have learnt
/*1. make a connection to mongoDB using mongoose
2. set up a simple test environment with Mocha
3. create a model and a schema
4. create instance of a model and save it to a database
5. drop a collection
*/
before(function(done){
    
/****connecting to database starts here */
mongoose.connect('mongodb://localhost:27017/testing');

mongoose.connection.once('open', ()=>{
    console.log('2sec everything don burst o');
    done();
}).on('error', (error)=>{
    console.log('no where jel baba', error)
})

/**connecting to database stops here */
})

/////drop the character before each test
beforeEach(function(done){
    ///drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})
