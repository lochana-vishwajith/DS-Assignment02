const payment = require('./Routes/Payment');
const express = require('express');
const cors =require('cors')

//using the express middleware
const app = express();


app.use(cors());
//to convert objects to JSON format
app.use(express.json());
//Route for the Payment Routes
app.use('/Payments',payment);


//taking the Port which runs the Backend
const Port = process.env.PORT || 5000;

//Listener to listen port
app.listen(Port,()=>{
    console.log("Listening to the port "+Port);
})