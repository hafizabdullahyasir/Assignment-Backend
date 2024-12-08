const create = (req, res) => {
  console.log(req);
  return res.send("respond with a resource");
};
const get = (req, res) => {
  console.log(req);
  return res.send("respond with a resource");
};
const update = (req, res) => {
  console.log(req);
  return res.send("respond with a resource");
};
const Delete = (req, res) => {
  console.log(req);
  return res.send("respond with a resource");
};

module.exports = { create, get, update, Delete };
