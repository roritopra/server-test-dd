const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const reviewerRoutes = require("./routes/reviewerRoutes");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/reviewers", reviewerRoutes);
module.exports = app;