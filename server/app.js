require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
// require("./db/connection");
const PORT = 4002;
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Otp',{useNewUrlParser: true});


//middleware 

app.use(express.json());
app.use(cors());


app.listen(PORT, ()=>{
    console.log(`server start at Port No :${PORT}`)
})