const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverDetailsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const deliverDetails = mongoose.model("Deliver_Details", deliverDetailsSchema);
module.exports = deliverDetails;
