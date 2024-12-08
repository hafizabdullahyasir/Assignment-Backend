// const responseHandler = require("../responseHandler");

const joi = require("joi");

const createValidations = joi.object({
  name: joi.string().min(3).max(24).required(),
  username: joi.string().min(3).max(15).required(),
  email: joi.string().email().required(),
  password: joi.string.pattren(new RegExp["^[a-zA-Z0-9]{3,30}$"]()),
});
const getAllValidations = joi.object({
  name: joi.string().min(3).max(30),
  username: joi.string().min(3).max(30),
  email: joi.string().email(),
});

const updateValidations = joi.object({
  name: joi.string().min(3).max(30).required(),
  username: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
});

const deleteValidations = joi.object({
  username: joi.string().min(3).max(30).required(),
});

const createUser = async (req, res, next) => {
  try {
    await createValidations.validateAsync(req.query);
    next();
  } catch (error) {
    return res.send({
      status: 400,
      message: "validation error",
      data: {},
      error: error.message,
    });
  }
};
const getUser = async (req, res, next) => {
  try {
    await getAllValidations.validateAsync(req.query);
    next();
  } catch (error) {
    return res.send({
      status: 400,
      message: "validation error",
      data: {},
      error: error.message,
    });
  }
};
const updateUser = async (req, res, next) => {
  try {
    await updateValidations.validateAsync(req.query);
    next();
  } catch (error) {
    return res.send({
      status: 400,
      message: "validation error",
      data: {},
      error: error.message,
    });
  }
};
const deleteUser = async (req, res, next) => {
  try {
    await deleteValidations.validateAsync(req.body);
    next();
  } catch (error) {
    return res.send({
      status: 400,
      message: "validation error",
      data: {},
      error: error.message,
    });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
