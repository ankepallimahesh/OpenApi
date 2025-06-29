const express = require('express');
const Products = require('../models/Products');
const router = express.Router();
router.get('/',async(req,res)=>{
    try{
        
        const data = await Products.find({});
        if(data.length == 0){
            return res.status(200).json({
                message:"No products were added, try to add products"
            })
        }
        res.json(data);

    }
    catch(err){
        res.status(500).json({ message:"Internal Server error"})
    }
})
module.exports = router;