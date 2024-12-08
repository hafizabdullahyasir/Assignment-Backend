const { models } = require("../index");
module.exports = {
  createUser: async (body) => {
    try {
      const data = await models.users.create({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  getAllUser: async (body) => {
    try {
      const data = await models.users.findAndCountAll({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  updateUser: async (body) => {
    try {
      const data = await models.users.update({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  deleteUser: async (body) => {
    try {
      const data = await models.users.destroy({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },
};
