const responseHandler = require("../responseHandler");

module.exports = {
  create: (req, res) => {
    console.log(req);
    try {
      return responseHandler(res);
    } catch (error) {
      return responseHandler(res);
    }
  },
  get: (req, res) => {
    console.log(req);
    try {
      return responseHandler(res);
    } catch (error) {
      return responseHandler(res);
    }
  },
};