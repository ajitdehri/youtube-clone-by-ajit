const mongoose = require("mongoose");

mongoose
  .connect(process.env.dbLink)
  .then(() => console.log('Database connected!')).catch(err=>{
    console.log(err)
  });