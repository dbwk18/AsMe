var pool = require('../../middleware/database');

exports.selectAllTrash = async (req) => {
    try {
        let trash = await pool.query('select trash_id, title from trash where user_id = ?', req);
        return trash[0];
    } catch (error) {
        return Error(error);
    }
}