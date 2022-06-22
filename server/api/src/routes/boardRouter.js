var router = require('express').Router();
const boardController = require('../controllers/boardController');

//글 목록
router.get('/posts/:user_id', boardController.selectAllPost);



module.exports = router;
