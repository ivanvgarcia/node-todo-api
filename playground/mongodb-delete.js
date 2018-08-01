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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Study web development'}).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({name: 'Massiel'}).then((result) => {
        console.log(result.value);
    });

    db.collection('Users').deleteMany({name: 'Ivan'}).then((result) => {
        console.log(result.result);
    });

    // client.close();
});