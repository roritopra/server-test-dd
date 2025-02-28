const users = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.userById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (user) {   
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.getActiveUsers = (req, res) => {
  const activeUsers = users.filter(user => user.is_active);
  console.log("Active Users:", activeUsers); 
  res.json(activeUsers);
};

exports.getInactiveUsers = (req, res) => {
  const inactiveUsers = users.filter(user => !user.is_active);
  console.log("Inactive Users:", inactiveUsers); 
  res.json(inactiveUsers);
};