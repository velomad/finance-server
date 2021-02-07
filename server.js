const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/blogs", require("./routes/blogs"));
app.use("/api/v1/campaigns/creditcard", require("./routes/campaigns/creditCard.router"));
app.use("/api/v1/campaigns/homeloan", require("./routes/campaigns/homeLoan.router"));

module.exports = app;
