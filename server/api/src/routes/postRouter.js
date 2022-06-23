var router = require('express').Router();
const postController = require('../controllers/postController');

//글 목록
router.get('/posts', postController.selectAllPost);

//글 생성
router.post('/post', postController.insertPost);

//개별 글 휴지통으로
router.delete('/post/:post_id', postController.deletePost);




module.exports = router;
