const reviewers = require("../models/reviewerModel");

exports.getAllReviewers = (req, res) => {
  res.json(reviewers);
};

exports.reviewerById = (req, res) => {
  const reviewerId = parseInt(req.params.id, 10);
  const reviewer = reviewers.find((r) => r.id === reviewerId);

  if (reviewer) {
    res.json(reviewer);
  } else {
    res.status(404).json({ message: "Reviewer not found" });
  }
};
