var pool = require('../../middleware/database');

exports.selectTrash = async (req) => {
    try {
        let trash = await pool.query('select * from trash where trash_id = ?', req);
        return trash[0];
    } catch (error) {
        return Error(error);
    }
}

exports.deleteTrash = async (req) => {
    try {
        await pool.query('delete from trash where trash_id=?', req);
        return;
    } catch (error) {
        return Error(error);
    }
}
