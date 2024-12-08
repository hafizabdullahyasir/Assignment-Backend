const { models } = require("../index");
module.exports = {
  createAdmin: async (body) => {
    try {
      const data = await models.users.create({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  getAllAdmin: async (body) => {
    try {
      const data = await models.users.findAndCountAll({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  updateAdmin: async (body) => {
    try {
      const data = await models.users.update({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.error[0].message };
    }
  },
  deleteAdmin: async (body) => {
    try {
      const data = await models.users.destroy({ ...body });
      return { data: data };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },
};
