var router = require('express').Router();
const trashBoardController = require('../controllers/trashBoardController');

//휴지통 목록 조회
router.get('/trashes/:user_id', trashBoardController.selectAllTrash);

module.exports = router;