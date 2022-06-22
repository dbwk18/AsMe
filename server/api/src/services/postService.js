var pool = require('../../middleware/database');


exports.selectPost = async (req) => {
    try {
        let post = await pool.query('select * from posts where post_id = ?', req);
        return post[0];
    } catch (error) {
        return Error(error);
    }
}

exports.insertPost = async (req) => {
    try {
        console.log(req);
        let post = await pool.query('insert into posts (title, content, creation_time, image, layout_type, user_id) values (?, ?, NOW(), ?, ?, ?)', req);
        return post[0];
    } catch (error) {
        return Error(error);
    }
}

exports.deletePost = async (req) => {
    try {
        await pool.query('delete from posts where post_id=?', req);
        return;
    } catch (error) {
        return Error(error);
    }
}

exports.insertTrash = async (req) => {
    try {
        await pool.query('insert into trash (trash_id, title, content, creation_time, image, layout_type, user_id) values (?, ?, ?, ?, ?, ?, ?)', req);
        let check = await pool.query('select * from trash where trash_id=?', req[0]);
        return check[0];
    } catch (error) {
        return Error(error);
    }
}





// exports.updatePost = async (req, res) => {
//     try {
//         await pool.query('update posts set post_title=?, post_content=?, post_writer=? where post_uid=?', req);
//         return;
//     } catch (error) {
//         return Error(error);
//     }
// }