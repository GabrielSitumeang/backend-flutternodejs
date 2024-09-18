//import the express module
const express = require('express');
const mongoose = require("mongoose");
const authRouter = require('./routes/auth');

//Defind the port number the server will listen on 
const PORT = 3000;

//create an instance of an express application
//because it give us the starting point 
const app = express();

//mongodb String 
const DB = "mongodb://myel7673:root@cluster0-shard-00-00.fd5p0.mongodb.net:27017,cluster0-shard-00-01.fd5p0.mongodb.net:27017,cluster0-shard-00-02.fd5p0.mongodb.net:27017/?ssl=true&replicaSet=atlas-5oyep9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

//middleware - to register routes or to mount routes
app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then(()=>{
    console.log('mongodb connected');
});

//start the server and listen on the specific port 
app.listen(PORT, "0.0.0.0", function(){
    //LOG THE NUMBER 
    console.log(`server is running on port ${PORT}`);
})