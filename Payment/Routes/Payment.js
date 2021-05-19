const express = require('express');
const Router = express.Router();
const MobilePay =require('../Payment API/PaymentMobile');
const validate_card = require('../Payment API/payments');

//get request for the API
Router.get('/',(req,res)=>{
    res.send("Welcome to the Payment API ");
});


Router.post('/credit',(req,res)=>{
//taking the data in the body and saved it in x variable
    let x = req.body;
    //use the validate_Card method
    let x1 =validate_card(x);
    console.log(x1);
    //send the returning values to the frontend
    res.send(x1);
})

Router.post('/mobile',(req,res)=>{
    let x = req.body;
    let x2 =MobilePay(x);
    console.log(x2);
    res.send(x2);
})

module.exports =Router;