const router = require("express").Router();
const locationDetails = require("../models/locationDetails");

router.post("/", (req, res) => {
  const { location, price } = req.body;

  const locationItem = new locationDetails({
    location,
    price,
  });

  locationItem
    .save()
    .then(() => {
      res.json("Location details Added.");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  const { name, address } = req.body;

  locationDetails
    .find()
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:location", (req, res) => {
  const { location, price } = req.params;

  locationDetails
    .findOne({ location: location })
    .then((details) => {
      res.json(details);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
