const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://ivan:redsox24@ds163781.mlab.com:63781/node-todo-api',
    mlab: 'mongodb://localhost:27017/TodoApp'
};

mongoose.connect(db.localhost || db.mlab, {
    useNewUrlParser: true
});

module.exports = {
    mongoose
};