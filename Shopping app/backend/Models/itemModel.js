const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemDetailsSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const ItemDetails = mongoose.model("Item", itemDetailsSchema);
module.exports = ItemDetails;