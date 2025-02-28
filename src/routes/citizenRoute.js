const express = require("express");
const router = express.Router();
const citizenController = require("../controllers/citizenController");

router.get("/", citizenController.getAllCitizens);
router.get("/:id", citizenController.getCitizenById);

module.exports = router;
