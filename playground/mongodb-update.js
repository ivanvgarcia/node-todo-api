//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("5b5fbccbb0fa9f2dfc343cf2")
    // }, {
    //     $set: {
    //         name: 'Ivan'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b5fbccbb0fa9f2dfc343cf2")
    }, {
        $inc: {
            age: -30
        }
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});