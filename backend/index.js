const express = require("express");
const app=express();
const PORT=5000
const cookieParser = require('cookie-parser');
const cors = require("cors");
require('dotenv').config();


app.use(express.json());
app.use(cookieParser());
require('./Connection/db')  // database connet to server

app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
    })
  );


const AuthRoutes=require('./Routes/user');
const VideoRoutes = require('./Routes/video');
const CommentRoutes = require('./Routes/comment');

// middleware
app.use('/auth',AuthRoutes);
app.use('/api',VideoRoutes);
app.use('/commentApi',CommentRoutes);

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server is runing on port: ${port}`);
})