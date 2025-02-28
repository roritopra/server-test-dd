const cases = require("../models/caseModel");

const caseController = {
  getAllCases(req, res) {
    res.json(cases);
  },

  getCaseById(req, res) {
    const caseId = parseInt(req.params.id, 10);
    const foundCase = cases.find((c) => c.id === caseId);

    if (foundCase) {
      res.json(foundCase);
    } else {
      res.status(404).json({ message: "Case not found" });
    }
  },

  updateCase(req, res) {
    const caseId = parseInt(req.params.id, 10);
    const caseIndex = cases.findIndex((c) => c.id === caseId);

    if (caseIndex === -1) {
      return res.status(404).json({ message: "Case not found" });
    }

    const updatedCase = {
      ...cases[caseIndex],
      ...req.body,
      update: new Date().toISOString()
    };

    cases[caseIndex] = updatedCase;
    res.json(updatedCase);
  },

  addMessage(req, res) {
    const caseId = parseInt(req.params.id, 10);
    const caseIndex = cases.findIndex((c) => c.id === caseId);

    if (caseIndex === -1) {
      return res.status(404).json({ message: "Case not found" });
    }

    const newMessage = {
      message: req.body.message,
      date: new Date().toISOString()
    };

    // Add to history_comments array
    if (!cases[caseIndex].history_comments) {
      cases[caseIndex].history_comments = [];
    }
    cases[caseIndex].history_comments.push(newMessage);

    res.json(newMessage);
  }
};

module.exports = caseController;