const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result)
// });

Todo.findOneAndRemove({id: '5c2d43eed45e2cea93428481'}).then((todo) => {
  console.log(todo);
})


Todo.findOneAndRemove
Todo.findByIdAndRemove('5c2d43eed45e2cea93428481').then((todo) => {
  console.log(todo);
})