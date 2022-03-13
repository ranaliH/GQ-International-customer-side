const mongoose = require('mongoose');
const { Schema } = mongoose;

const productCartShopping = new Schema({
  itemCode: {
    type: String,
    //required: true
  },

description: {
type: String,
//required: true
},

unitPrice: {
type: Number,
//required: true
},

qty: {
type: String,
//required: true
},

total: {
type: String,
//required: true
}  
});

const productShopping = mongoose.model('productCartShopping', productCartShopping);

module.exports = productShopping;