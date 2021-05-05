const router = require('express').Router();
const { response } = require('express');
const userDetails = require('../Models/UserRegisterModel');
const { route } = require('./itemRoutes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/' , (req,res) => {
    bcrypt.hash(req.body.password , 10).then( hash =>{

        const details = new userDetails({
            fullName : req.body.fullName,
            email : req.body.email,
            phone : req.body.phone,
            password : hash
        });

        details.save().then(() => {
            res.json("User Details Added");
        }).catch((err) => {
            console.log(err);
        })
    } )
})

router.post('/login',async (req,res) => {

    const {email, password} = req.body;

    const login = await userDetails.findOne({email : email});

    console.log(login);
    const isMatch = await bcrypt.compare(password , login.password);

    const token = await login.generateAuthToken();
    console.log(token);

    res.cookie("JWTToken", token , {
        expires : new Date(Date.now() + 25892000000),
        httpOnly : true
    })

    if(!isMatch){
        console.log("Password is inncorrect")
    }

    if(!login){
        res.json({error : "Login Failed"});
    }
    else {
        res.json({message : "Login Successfull"});
    }
})

module.exports = router;