const citizens = require("../models/citizensModel");

exports.getAllCitizens = (req, res) => {
  res.json(citizens);
};

exports.getCitizenById = (req, res) => {
  const citizen = citizens.find((c) => c.id === parseInt(req.params.id));
  if (!citizen) {
    return res.status(404).json({ message: "Citizen not found" });
  }
  res.json(citizen);
};
