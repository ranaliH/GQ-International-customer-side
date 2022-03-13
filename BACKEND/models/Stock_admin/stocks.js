const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({

    ItemCode:{
        type:String,
        required:true
    },
    
    Category:{
        type:String,
        required:true
    },

    Quantity:{
        type:Number,
        required:true
    },

   /* TotalNumberOfItems:{
        type:Number,
        required:true
    }*/
});


module.exports=mongoose.model('Stocks',stockSchema);
