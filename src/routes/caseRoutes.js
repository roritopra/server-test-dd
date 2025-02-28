const express = require("express");
const caseController = require("../controllers/caseController");

const router = express.Router();

router.get("/", caseController.getAllCases);
router.get("/:id", caseController.getCaseById);
router.post("/:id/update", caseController.updateCase);
router.post("/:id/message", caseController.addMessage);

module.exports = router; 