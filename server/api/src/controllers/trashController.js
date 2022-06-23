const trashService = require('../services/trashService');


exports.deleteTrash = async (req, res) => {
    let trash_id = req.params.trash_id;
    try {
        await trashService.deleteTrash(trash_id);
        let check = await trashService.selectTrash([trash_id]);
        if (check[0] == null) {
            res.status(200).json({ message: "삭제되었습니다." });
        } else {
            res.status(200).json({ message: "삭제를 실패하였습니다." });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}
exports.selectCluster = async (req, res) => {
    let { user_id } = req.body;
    try {
        let cluster = await trashService.selectCluster([user_id]);
        res.status(200).json({
            clusters: cluster
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}


