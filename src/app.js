const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const reviewerRoutes = require("./routes/reviewerRoutes");
const caseRoutes = require("./routes/caseRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/reviewers", reviewerRoutes);
app.use("/cases", caseRoutes);

module.exports = app;