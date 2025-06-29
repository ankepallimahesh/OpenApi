const express = require('express');
const Products = require('../models/Products');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { id, productname, description, price } = req.body;

        if (!id || !productname || !description || !price) {
            return res.status(400).json({
                message: "All fields are required",
                Fields: "id, productname, description, price"
            });
        }

        const product = new Products({
            id,
            productname,
            description,
            price
        });

        await product.save();

        res.status(201).json({
            message: "Product added successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

module.exports = router;
