var router = require('express').Router();
const postController = require('../controllers/postController');

//개별 글 상세
router.get('/post/:post_id', postController.selectPost);

//개별 글 휴지통으로
router.delete('/post/:post_id', postController.deletePost);

//글 생성
router.post('/post', postController.insertPost);



// 글 업데이트
// router.put('/:post_uid', postController.updatePost);



module.exports = router;
