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
