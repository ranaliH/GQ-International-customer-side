const mongoose = require('mongoose');

const paySchema = new mongoose.Schema({
    
    date:{
        type:String,
        required:true
    },
    orderID :{
        type :String,
        required:true
    },
    cusID :{
        type :String,
        required:true
    },
    productCode :{
        type :String,
        required:true
    },
    amount :{
        type:String,
        required:true
    },
    paySlip :{
        type:String,
        required:true
    }
})

const payment = mongoose.model('payments',paySchema); //'item' will be the collection name in the mongodb

module.exports = payment;