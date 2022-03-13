const mongoose = require("mongoose");

/*const Schema = mongoose.Schema;*/

const orderAdminSchema = new mongoose.Schema({

    order_id : {
        type:String,
        required: true
    },
    
    item_id : {
        type:String,
        required: true
    },


    amount : {
        type:Number,
        required : true
    },

    total : {
        type:Number,
        required : true
    },

    cus_id : {
        type:String,
        required: true
    },

    status : {
        type:String,
        required:true
    },

    date : {
        type:String,
        required:true
    }

})

const orderAdmin = mongoose.model("orderAdmin",orderAdminSchema);
module.exports = orderAdmin;