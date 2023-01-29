require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 4002;


//middleware 

app.use(express.json());
app.use(cors());


app.listen(PORT, ()=>{
    console.log(`server start at Port No :${PORT}`)
})