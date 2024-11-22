const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const users = require("./data");

app.use(bodyParser.json());
app.use(cors());

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/users/:id/update", (req, res) => {
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
});

app.post("/users/:id/message", (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
