const{Router} = require('express');

//my require
const homeController = require('../controllers/homeController');


const router = Router();

//routes
router.get('/', homeController.index);


module.exports = router;