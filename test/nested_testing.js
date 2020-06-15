var assert = require('assert');
const mongoose = require('mongoose');
var Author = require('../models/author');
const { findOneAndUpdate } = require('../models/author');
const MarioChar = require('../models/mariochar');


////describe the test 

describe('Nesting records', ()=>{

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            
        })
        done()
    })
    
    it ('create an author with some sub document', done=>{
        var pat = new Author({
            name: ' Patrick Roftus',
            books: [{title:'data algorithms', pages: 21} ]
        })

        pat.save().then(()=>{
                Author.findOne({name:'Patrick Roftus'}).then(res=>{
                    assert(res.books.lenth === 1)
                })
                done();
        })
    })

    it('add a book to a database', function (done){
        var pat = new Author({
            name: 'Patrick Roftus',
            books: [{title: 'name of the wind', pages: 400}]
        })
        pat.save().then(()=>{
            Author.findOne({name: "Patrick Roftus"}).then((res)=>{
                res.books.push({title:'wise man fear', pages:200})
                res.save().then(()=>{
                    Author.findOne({ name: 'Patrick Roftus'}).then(res=>{
                        assert(res.books.length === 2)
                    })
                    done()
                })
            })
        })
    })
})