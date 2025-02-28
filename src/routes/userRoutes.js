const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/active', userController.getActiveUsers); 
router.get('/inactive', userController.getInactiveUsers);
router.get('/:id', userController.userById);
router.get('/', userController.getAllUsers);

module.exports = router;