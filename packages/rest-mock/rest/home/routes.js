const express = require("express");

const router = express.Router();
const models = require("./models");

// GET  listing.
router.get("/", (req, res) => {
  res.send(models);
});
;

module.exports = router;
