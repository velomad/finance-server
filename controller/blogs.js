const models = require("../models");

module.exports = {
  getAllBlogs: async (req, res) => {
    try {
      const blogs = await models.Blog.findAll();
      return res.status(200).json({ blogs });
    } catch (e) {
      return res.status(500).send(error.message);
    }
  },
};
