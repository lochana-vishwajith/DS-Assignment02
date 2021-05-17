const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billingDetailsSchema = new Schema({
    userID: {
        type : String,
        required : true  
    },
    BillingName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

const billingDetails = mongoose.model("BillingDetails" , billingDetailsSchema);
module.exports = billingDetails;