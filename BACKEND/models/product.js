const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  
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

const product = mongoose.model('products', productSchema);

module.exports = product;