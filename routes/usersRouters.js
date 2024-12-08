var express = require("express");
var router = express.Router();
const {
  create,
  get,
  update,
  Delete,
} = require("../controllers/userControllers");

/* GET users listing. */
router.post("/create", create);
router.get("/get-all", get);
router.put("/update", update);
router.delete("/delete", Delete);

module.exports = router;
