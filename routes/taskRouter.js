const {Router} = require('express');

const auth = require('../middleware/auth');


const taskController = require('../controllers/tasksController');

const router = Router();

router.get('/',auth, taskController.index);


router.get('/add', auth, taskController.add);


router.post('/add', auth, taskController.addTask);

router.post('/delete', auth, taskController.delete);

router.post('/important', auth, taskController.important);
router.post('/complete', auth, taskController.complete);


router.post('/change', auth, taskController.change);
router.post('/putChange', auth, taskController.putChange);

router.post('/share', auth, taskController.share);
router.post('/shareResult', auth, taskController.saveShare);

module.exports = router;