const router = require('express').Router();
const BillingDetails = require('../Models/billingDetailsModel');

router.post('/' , (req,res) => {

        const details = new BillingDetails({
            userID : req.body.userID,
            BillingName : req.body.BillingName,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address
        });

        details.save().then(() => {
            res.json("Billing Details Added");
        }).catch((err) => {
            console.log(err);
        })
    
})

router.get('/:id' , async (req,res) => {

    let userId = req.params.id;
 
    const billDetail =  await BillingDetails.findOne({userID : userId}).then((item)=> {
        res.status(200).send({status : "data is fetched",item});
        
    }).catch((err) => {
        console.log(err);
    })
})

router.put('/:id' , async (req,res) => {

    let userId = req.params.id;

    const details = {
        userID : req.body.userID,
        BillingName : req.body.BillingName,
        email : req.body.email,
        phone : req.body.phone,
        address : req.body.address
    }

    const updateDetails = await BillingDetails.findByIdAndUpdate(userId , details).then(() => {
        res.send({status : "Details updated"})
    })
    .catch(err => {
        res.send({status : err.message})
    })

})
module.exports = router;