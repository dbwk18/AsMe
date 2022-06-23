const trashBoardService = require('../services/trashBoardService');

exports.selectAllTrash = async (req, res) => {
    let user_id = req.params.user_id;
    try {
        let trash = await trashBoardService.selectAllTrash([user_id]);
        res.status(200).json({
            trash: trash
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.selectKeyword = async (req, res) => {
    let user_id = req.params.user_id;
    let { cluster_id } = req.body;
    try {
        let keyword = await trashBoardService.selectKeyword([user_id, cluster_id]);
        res.status(200).json({
            clusters: keyword
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}
