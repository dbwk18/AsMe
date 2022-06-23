var router = require('express').Router();
const trashController = require('../controllers/trashController');

router.get('/cluster/:cluster_id', trashController.selectClusterList);

//휴지통 삭제
router.delete('/trash/:trash_id', trashController.deleteTrash);

//휴지통 클러스터 글감 목록
router.get('/cluster', trashController.selectCluster);

router.get('/test', trashController.test);

module.exports = router;