const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); 

const app = express();

app.listen(3000, () => console.log("Capstone lets be live on port 3000"));

mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).finally(
console.log('Db Connected!!!')
);

// _id:62ae24d6410154794c1c8150
// filename:"2201.00021.pdf"
// author:"Y. T. Yan"
// title:"Discovery of ammonia"
// Keywords:"Masers – ISM: clouds – ISM: individual objects: Cep A, G34.26+0.15 – I..."
// chunkSize:261120
// length:2740169
// uploadDate:2022-06-18T19:17:43.019+00:00

const articleSchema = new mongoose.Schema({
    _id: String,
    filename: String,
    author: String,
    title: String,
    keywords: String,
    chunkSize: Number,
    length: Number,
    uploadDate: Date
});

const Files = mongoose.model('files', articleSchema);

app.get('/', (req, res) => {
    Files.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some error occured!")
    })
});
