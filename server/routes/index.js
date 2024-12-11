const Router = require('express');
const router = new Router();

router.use('/user');
router.use('/type');
router.use('/brand');
router.use('/device');


module.exports = router;