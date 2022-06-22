var router = require('express').Router();
const signController = require('../controllers/signController');

//signin
router.post('/signin', signController.signin);

//signup
router.post('/signup', signController.signup);


module.exports = router;