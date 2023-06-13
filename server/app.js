const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRouter = require('./router/postRouter')

// config dotenv
require('dotenv').config()
app.use(express.json())
// environmental variable
const mongoDB_url = process.env.DBURL
const port = process.env.PORT || 7070


// mongoDB connection
const connect = ()=>{
    mongoose.connect(mongoDB_url)
    try{
        console.log('DB connected successfully');
    }catch(err){
        console.log(err);
    }
}

// routes
app.use('/posts',postRouter)

// server

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
    connect()
})
