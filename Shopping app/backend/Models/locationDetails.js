const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationDetailsSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const locationDetails = mongoose.model(
  "Location_Details",
  locationDetailsSchema
);
module.exports = locationDetails;
