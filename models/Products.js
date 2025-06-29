const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    id:{
        type:Number,
        required:[true,"id is required "],
        unique:true
    },
    productname:{
       type:String,
       required:[true,"productname is required"],

    },
    description:{
        type:String,
        required:[true,"description is required"]
    },
   price:{
    type:Number,
    required:[true,"price is required"]
   }

},{timestamps:true});

const Products = mongoose.model('Products',schema);
module.exports = Products;