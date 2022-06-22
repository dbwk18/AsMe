const trashService = require('../services/trashService');

exports.selectTrash = async (req, res) => {
    let trash_id = req.params.trash_id;
    try {
        let trash = await trashService.selectTrash([trash_id]);
        return res.status(200).json({
            layout_type: trash[0].layout_type,
            title: trash[0].title,
            content: trash[0].content,
            creation_time: trash[0].creation_time,
            image: trash[0].image
        });
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.deleteTrash = async (req, res) => {
    let trash_id = req.params.trash_id;
    try {
        await trashService.deleteTrash(trash_id);
        let check = await trashService.selectTrash([trash_id]);
        if (check[0] == null) {
            res.send('<script type="text/javascript">alert("삭제되었습니다.");</script>');
        } else {
            res.send('<script type="text/javascript">alert("삭제 실패.");</script>');
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
