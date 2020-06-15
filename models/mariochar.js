var mongoose = require('mongoose');
//*this is how to create a schema**/
var Schema = mongoose.Schema;

var marioSchema = new Schema({
    name: String,
    age: Number
});

/**this is the model that will be reference to create instance of what you are working with */

var MarioChar = mongoose.model('marioChar', marioSchema);

module.exports = MarioChar;

