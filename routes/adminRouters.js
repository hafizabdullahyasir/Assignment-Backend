var express = require("express");
var router = express.Router();

const { create, get } = require("../controllers/adminControllers");

router.post("/create", create);
router.get("/get-All", get);

module.exports = router;
