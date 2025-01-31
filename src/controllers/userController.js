const users = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { status, assignedName, assignedAvatar } = req.body;

  const user = users.find((u) => u.id === userId);
  if (user) {
    if (status) user.status = status;
    if (assignedName) user.assigned.name = assignedName;
    if (assignedAvatar) user.assigned.avatar = assignedAvatar;

    res.json({ message: "User updated successfully", user });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.addMessage = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { message } = req.body;

  const user = users.find((u) => u.id === userId);
  if (user) {
    const currentDate = new Date().toISOString();
    if (!user.history_comments) {
      user.history_comments = [];
    }
    user.history_comments.push({ message, date: currentDate });

    res.json({ message: "Message added successfully", user });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};