const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
router.put('/:id',async(req,res)=>{
    try{
    const {productname,description,price} = req.body;
     const id = req.params.id;
     const update = await Products.findOneAndUpdate({id:id},{productname:productname,description:description,price:price},{new:true});
     if(!update){
        return res.status(404).json({message:'product not found'});
     }
     res.json(update);
    }
    catch(err){
        res.status(500).json({message:'Internal Server error'});
    }
     
})
module.exports = router;