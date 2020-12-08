

const express = require("express");

const router = express.Router();
const models = require("./models");

/* GET users listing. */
router.get("/", (req, res) => {
  try {
    return res.json(models);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
});

module.exports = router;
