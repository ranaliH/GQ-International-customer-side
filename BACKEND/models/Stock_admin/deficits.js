const mongoose = require('mongoose');

const deficitSchema = new mongoose.Schema({

    DeficitCode:{
        type:String,
        required:true
    },
    
    Category:{
        type:String,
        required:true
    },

    Color:{
        type:String,
        required:true
    },

    RequiredQuantity:{
        type:Number,
        required:true
    },

});


module.exports=mongoose.model('deficits',deficitSchema);
