const router = require('express').Router();
const ItemDetails = require('../Models/itemModel');
const multer = require('multer');

const upload = multer({dest : 'uploads/'});

router.post('/' ,(req,res) => {
   
    const {title , description, price} = req.body;
    
    const newItem = new ItemDetails({
        title,
        description,
        price
        
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

//delete items
// app.delete("/:id", async (req, res) => {
//     try {
//       let id = req.params.id;
//       console.log("id eka ko" + id);
//       const item = await Item.findById(id);
//       const a1 = await item.remove();
//       res.json(a1);
//     } catch (e) {
//       res.send("error = " + e);
//     }
//   });

module.exports = router;