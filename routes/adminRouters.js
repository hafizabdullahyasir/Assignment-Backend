var express = require("express");
var router = express.Router();

const {
  create,
  get,
  update,
  Delete,
} = require("../controllers/adminControllers");

router.post("/create", create);
router.get("/get-All", get);
router.put("/update", update);
router.delete("/delete", Delete);

module.exports = router;
