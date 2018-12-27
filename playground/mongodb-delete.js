// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });
  //findOneAndDelete
      // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      //   console.log(result);
      // })

      db.collection('Users').deleteMany({name: 'Christian S'}).then((result) => {
        console.log(result);
      });

      // db.collection('Users').deleteOne({
      //   _id: new ObjectID('5c23c9c06835c04230231a59')
      // }).then((result) => {
      //   console.log(`You did it! ${result}`)
      // })
  // db.close();
});

