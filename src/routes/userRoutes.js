const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/:id/update", userController.updateUser);
router.post("/:id/message", userController.addMessage);

module.exports = router;