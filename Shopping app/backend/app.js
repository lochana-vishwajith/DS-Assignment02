const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const Item = require("./Models/sellerItem");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const Mongo_url = process.env.SHOPPING_MONGO_DB;

mongoose.connect(Mongo_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connected..!!");
});

const itemDetails = require("./Routes/itemRoutes");
app.use("/itemDetails", itemDetails);

const userDetails = require("./Routes/UserRegisteRotes");
app.use("/userDetails", userDetails);

const BillingDetails = require("./Routes/billingDetailsRoutes");
app.use("/billingDetails", BillingDetails);

const deliverDetails = require("./Routes/deliverRoute");
app.use("/deliverDetails", deliverDetails);

const locationDetails = require("./Routes/locationRoute");
app.use("/locationDetails", locationDetails);

///////////------ushara--------------

//add new item
app.post("/addNewItem", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    const a1 = await item.save();
    res.json(a1);
  } catch (e) {
    res.send("Error - " + e);
  }
});

//view item list
app.get("/ViewList", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (e) {
    res.send("Error - " + e);
  }
});

//delete items
app.delete("/Deleteitem/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log("id eka ko" + id);
    const item = await Item.findById(id);
    const a1 = await item.remove();
    res.json(a1);
  } catch (e) {
    res.send("error = " + e);
  }
});

/////////////////////

app.listen(port, () => {
  console.log("Connected to port");
});
