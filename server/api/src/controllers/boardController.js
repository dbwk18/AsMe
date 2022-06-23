const boardService = require('../services/boardService');

exports.selectAllPost = async (req, res) => {
    let { user_id } = req.body;
    try {
        let posts = await boardService.selectAllPost(user_id);
        res.status(200).json({
            posts: posts
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}



