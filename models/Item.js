const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
   date: {
       type: Date,
       default: Date.now
   },
   model: {
       type: String,
       required: false
   },
   registration: {
       type: String,
       required: false
   },
   owner: {
       type: String,
       required: false
   },

   previousOwner1: {
       type: String,
       required: false
   },
   previousOwner2: {
    type: String,
    required: false
},
previousOwner3: {
    type: String,
    required: false
}

});

module.exports = Item = mongoose.model('item', ItemSchema)