const express = require("express");
const reviewerController = require("../controllers/reviewerController");

const router = express.Router();

router.get("/", reviewerController.getAllReviewers);
router.get("/:id", reviewerController.reviewerById);

module.exports = router;