const {Router} = require('express');

const auth = require('../middleware/auth');

const shareController = require('../controllers/shareController');


const router = Router();

router.get('/', auth, shareController.index);


module.exports = router;