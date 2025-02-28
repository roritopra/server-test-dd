const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const reviewerRoutes = require("./routes/reviewerRoutes");
const caseRoutes = require("./routes/caseRoutes");
const userRoutes = require("./routes/userRoutes");
const citizenRoutes = require("./routes/citizenRoute");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/reviewers", reviewerRoutes);
app.use("/cases", caseRoutes);
app.use("/users", userRoutes);
app.use("/citizens", citizenRoutes);
module.exports = app;