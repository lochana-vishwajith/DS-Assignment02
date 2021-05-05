const router = require('express').Router();
const ItemDetails = require('../Models/itemModel');
const multer = require('multer');



const upload = multer({dest : 'uploads/'});

router.post('/', upload.single('itemImage') ,(req,res) => {
   
    const {title , description, price} = req.body;
    
    const newItem = new ItemDetails({
        title,
        description,
        price,
        image : req.file.path
    })

    newItem.save().then(()=>{
        res.json("Item Details Added");
    }).catch((err) => {
        console.log(err);
    })
})

router.get('/' , (req,res) => {

    ItemDetails.find().then(items => {
        res.json(items);
    }).catch(err => {
        console.log(err);
    })
})

router.get('/:id' , async (req,res) => {

    let userId = req.params.id;
 
    const items =  await ItemDetails.findById(userId).then((item)=> {
        res.status(200).send({status : "data is fetched",item});
        
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;