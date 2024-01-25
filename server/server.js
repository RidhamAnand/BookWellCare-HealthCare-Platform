const express = require("express");
const app = express();
const dotenv = require('dotenv');
const cors = require("cors")
const { connection } = require("./database/database");
const router = require("./routes/routes");
const dummyData = require("./constants/doctors");
const Doctor = require("./models/doctorModel");
const combinedData = require("./constants/doctors");
const { DateTime, Duration } = require('luxon');

const path = require("path");

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"client","build")));
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})


// 

connection();




const PORT =  8080;

console.log("\n")

app.use(express.json())
app.use(cors())
app.use("/files", express.static("files"))
app.use("/",router)

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})


