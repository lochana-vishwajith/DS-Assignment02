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

    
    const isMatch = await bcrypt.compare(password , login.password);

    const token = await login.generateAuthToken();
    

    res.cookie("JWTToken", token , {
        expires : new Date(Date.now() + 25892000000),
        httpOnly : true
    })

    if(!isMatch){
        console.log("Password is inncorrect")
    }

    else if(!login){
        res.json({error : "Login Failed"});
    }
    else {
        res.json({message : "Login Successfull", id : login._id});
    }
})

//add to cart
router.put('/:id' , async (req,res) => {

    let userId = req.params.id;
    console.log(userId);

    const {productId,title,price} = req.body;

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

router.delete('/:id' , async (res,req) => {
    let userId = req.params.id;

    await userDetails.cart.findByIdAndDelete(userId).then()
})

module.exports = router;