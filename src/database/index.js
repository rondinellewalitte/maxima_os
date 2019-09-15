const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/maximaos');
mongoose.Promise = global.Promise;

module.exports = mongoose;