const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/sellerDS";
const Item = require("./models/items");
const dotEnv = require("dotenv");

const router = express.Router();
const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected....");
});

app.use(express.json());

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

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

module.exports = router;
