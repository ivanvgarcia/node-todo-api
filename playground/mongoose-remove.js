const {
    ObjectID
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {
    User
} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

Todo.findByIdAndRemove('5b627c317014b251b4fd803c').then((todo) => {
    console.log(todo);
});