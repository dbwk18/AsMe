var router = require('express').Router();
const trashController = require('../controllers/trashController');

//휴지통 삭제
router.delete('/trash/:trash_id', trashController.deleteTrash);

//휴지통 클러스터 글감 목록
router.get('/cluster', trashController.selectCluster);

module.exports = router;