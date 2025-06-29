const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const deletedata = await Products.findOneAndDelete({id:id});
        if(!deletedata){
            return res.status(404).json({message:'product not found'});
        }
        res.status(200).json({message:'product deleted successfully'});
    }
    catch(err){
        res.status(500).json({message:'Internal Server error'});
    }
})
module.exports = router;