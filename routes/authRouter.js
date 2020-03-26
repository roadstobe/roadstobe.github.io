const {Router} = require("express");

const authController = require('../controllers/authController');

const router = Router();

router.get('/login', authController.login);

router.post('/register', authController.register);

router.post('/login', authController.user);

router.get('/logout', authController.logout);

module.exports = router;