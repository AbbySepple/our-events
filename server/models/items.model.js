var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Mongoose Schema
var ItemSchema = new Schema({
    name: String,
    date: String,
    time: String,
    location: String
});

module.exports = mongoose.model('Item', ItemSchema);
