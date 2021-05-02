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

module.exports = router;