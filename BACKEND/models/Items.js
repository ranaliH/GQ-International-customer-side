const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    
    itemCode:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    unitPrice:{
        type: Number,
        required:true
    },

    color:{
        type:String,
        required:true
    },

    countInStock:{
        type: Number,
        require:true
    },

    imageUrl:{
        type:String,
        require:true
    }
})

const Item = mongoose.model('item',ItemSchema); //'item' will be the collection name in the mongodb

module.exports = Item;