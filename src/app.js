const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/users", userRoutes);

module.exports = app;