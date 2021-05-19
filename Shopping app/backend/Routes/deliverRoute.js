const router = require("express").Router();
const deliverDetails = require("../models/deliverDetails");

router.post("/", (req, res) => {
  const { name, address } = req.body;

  const deliverItem = new deliverDetails({
    name,
    address,
  });

  deliverItem
    .save()
    .then(() => {
      res.json("Deliver details Added.");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  const { name, address } = req.body;

  deliverDetails
    .find()
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
