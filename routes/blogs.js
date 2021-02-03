const { route } = require("../server");

const router = require("express").Router();
const controller = require("../controller/blogs.js");

router.get("/", controller.getAllBlogs);

module.exports = router;
