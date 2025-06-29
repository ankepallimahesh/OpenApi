const mongoose = require('mongoose');
require('dotenv').config();
const Database = async function(){
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected');
  }
  catch(err){
    console.log('Failed to connect Database');
  }
}
module.exports = Database;