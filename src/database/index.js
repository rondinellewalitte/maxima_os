const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/maximaos', { 
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;