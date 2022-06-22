var pool = require('../../middleware/database');

exports.selectAllPost = async (user_id) => {
    try {
        let posts = await pool.query('select post_id, title, creation_time from posts where user_id = ?', user_id);
        console.log(posts[0]);
        return posts[0];
    } catch (error) {
        return Error(error);
    }
}
