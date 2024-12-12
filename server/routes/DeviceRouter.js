const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');

router.post('/create', deviceController.create);
router.get('/getAll', deviceController.getAll);
router.get('/getOne', deviceController.getOne)


module.exports = router;