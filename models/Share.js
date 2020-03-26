const {Schema, model} = require('mongoose');

const shareSchema = ({
   idTask:{
       type: Schema.Types.ObjectId,
       ref: 'Task',
       require: true
   } ,
    idUsers:[{
       type: Schema.Types.ObjectId,
        ref: 'User',
    }]
});


module.exports = model('Share', shareSchema);