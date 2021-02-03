const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/blog", require("./routes/blogs"));
app.use("/api/v1/campaign", require("./routes/campaigns"));

module.exports = app;
