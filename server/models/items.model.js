var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Mongoose Schema
var ItemSchema = new Schema({
    name: String,
    date: Object,
    time: String,
    location: String,
    description: String
});

module.exports = mongoose.model('Item', ItemSchema);
