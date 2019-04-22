let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/resthub');
var db = mongoose.connection;

module.exports = db;