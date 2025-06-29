const express = require('express');
const app = express();
app.use(express.json());
const Database = require('./database/mongodb');
const addproduct = require('./routes/addproduct');
const getproducts = require('./routes/getproducts');
const updateproduct = require('./routes/updateproduct');
const deleteproduct = require('./routes/deleteproduct');
app.use('/addproduct',addproduct);
app.use('/getproducts',getproducts);
app.use('/updateproduct',updateproduct);
app.use('/deleteproduct',deleteproduct);
const Port = process.env.PORT || 5000;
app.listen(Port,async()=>{
    await Database();
    console.log(`Server now listening to Port ${Port}`);
})
