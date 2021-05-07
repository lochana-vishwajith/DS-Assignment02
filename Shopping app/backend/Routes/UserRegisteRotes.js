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
        res.json({message : "Login Successfull", id : login._id});
    }
})

router.put('/:id' , async (req,res) => {

    let userId = req.params.id;
    console.log(userId);

    const {productId,title,price,qty} = req.body;

    console.log("pid" + productId);

    const customer = await userDetails.findOne({_id : userId}).exec();
    if(customer){
        console.log("customer found");
    }else{
        console.log("customer not found");
    }

    const cart = customer.cart || [];
    const isAdded = cart.find(c => c.productId == productId);
    const item = {
        productId,
        qty : isAdded ? isAdded.qty + req.body.qty : req.body.qty,
        title : title,
        price : price
    }
    
    let cartItem;
    let update;

    if(isAdded){
        cartItem = {"cart.productId": productId, title : title, price : price};
        update = {
            "$set" : {
                "cart.$" : item
            }
        };

    }
    else{
        cartItem = {_id : userId};
        update = {
            "$push" : {
                "cart" : item
            }
        }
    }

    const adToCart = await userDetails.findOneAndUpdate(cartItem, update,{
        new :true
    }).then(()=>{
        res.send({message : "Item is added to cart"});
    }).catch((err) => {
        console.log(err);
        res.send({err : err});
    })

})

router.get('/' , async (req,res) => {
 

    const customer = await userDetails.find()    
    .then((customer) => {
         res.status(200).send({status : "Customer fetched", customer})
        
    }).catch((err) => {
        console.log(err.message);
        res.send({status : "error" , error: err.message})
    })
})

// router.get('/:email' , async (req,res) => {
   
//     let userMail = req.params.email;
//     console.log(userMail)
//     const customer = await userDetails.findOne({email : userMail})
    
//     .then((customer) => {
//         const customerId = customer._id
//         console.log(customer._id)
//         res.status(200).send({status : "Customer fetched", customerId})
        
//     }).catch((err) => {
//         console.log(err.message);
//         res.send({status : "error" , error: err.message})
//     })
// })

router.get('/getCart/:id' , async (req,res) => {
   
    let userId = req.params.id;

    const customer = await userDetails.findById(userId)
    
    .then((customer) => {
        const cartItems = customer.cart
        res.status(200).send({status : "Customer fetched", cartItems})
        
    }).catch((err) => {
        console.log(err.message);
        res.send({status : "error" , error: err.message})
    })
})

module.exports = router;