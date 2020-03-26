const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    login:{
        type: String,
        require: true,
        minlength: 2,
    },
    password:{
        type: String,
        require: true,
        minlength: 2
    },
    task:{
      items:[
          {
              taskId:{
                  type: Schema.Types.ObjectId,
                  ref: 'Task',
                  require: true
              }
          }
      ]
    },
    name: String,
    email: String


});


module.exports = model('User', userSchema)