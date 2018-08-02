const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ivan:redsox24@ds163781.mlab.com:63781/node-todo-api' || 'mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

module.exports = {
    mongoose
};