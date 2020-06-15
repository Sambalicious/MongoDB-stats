var mongoose = require('mongoose');
//*this is how to create a schema**/
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    pages: Number,
    
});
var AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});



/**this is the model that will be reference to create instance of what you are working with */

var Author = mongoose.model('author', AuthorSchema);

module.exports = Author;

