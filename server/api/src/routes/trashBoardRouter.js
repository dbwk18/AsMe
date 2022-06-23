var router = require('express').Router();
const trashBoardController = require('../controllers/trashBoardController');

//휴지통 목록 조회
router.get('/trashes/:user_id', trashBoardController.selectAllTrash);

//휴지통 클러스터 글감 목록
router.get('/cluster/:user_id', trashBoardController.selectKeyword);

module.exports = router;