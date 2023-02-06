const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restaurantRoute');
const SERVER_PORT = 8081;

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect("mongodb+srv://kafabnu101:65qX6iKL2ENMmQj@cluster0.xlocajv.mongodb.net/comp3133_db?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurantRouter);


app.route("/").get((req,res)=>{
    res.send("<h1>Lab 03 MongoDB & Mongoose");
})
    

app.listen(SERVER_PORT, () =>{
  console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})