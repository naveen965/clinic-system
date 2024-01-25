const express = require('express');
const UserController = require('../controllers/userController');
const { registerValidator, loginValidator } = require('../validators/userValidator');
//const intercptor = require('../middleware/intercepter');
const router = express.Router();

router.post('/register', registerValidator, UserController.register);
router.get('/login', loginValidator, UserController.login);

module.exports = router;