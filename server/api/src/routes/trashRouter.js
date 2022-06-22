var router = require('express').Router();
const trashController = require('../controllers/trashController');

//휴지통 조회
router.get('/trash/:trash_id', trashController.selectTrash);

//휴지통 삭제
router.delete('/trash/:trash_id', trashController.deleteTrash);


module.exports = router;