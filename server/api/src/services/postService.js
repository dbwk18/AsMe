var pool = require('../../middleware/database');

exports.selectAllPost = async (user_id) => {
    try {
        let posts = await pool.query('select post_id, title, content, creation_time, layout_type from posts where user_id = ?', user_id);
        console.log(posts[0]);
        return posts[0];
    } catch (error) {
        return Error(error);
    }
}

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
        let post = await pool.query('insert into posts (title, content, creation_time, layout_type, user_id) values (?, ?, NOW(), ?, ?)', req);
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


exports.getArticles = async (req) => {
    try {
        let trashes = await pool.query('select cluster_id, content from trash where user_id = ?', req);
        return trashes[0];
    } catch (error) {
        return Error(error);
    }
}

exports.clustering = async (req) => {
    try {
        await pool.query('update trash set cluster_id=? and keyword = ? where trash_id=?', req);
        return;
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