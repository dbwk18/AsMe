var pool = require('../../middleware/database');

exports.selectAllTrash = async (req) => {
    try {
        let trash = await pool.query('select trash_id, title from trash where user_id = ?', req);
        return trash[0];
    } catch (error) {
        return Error(error);
    }
}

exports.selectKeyword = async (req) => {
    try {
        let trash = await pool.query('select cluster_id, keyword from trash where user_id = ? and cluster_id=?', req);
        return trash[0];
    } catch (error) {
        return Error(error);
    }
}