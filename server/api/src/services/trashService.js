var pool = require('../../middleware/database');

exports.selectClusterList = async (req) => {
    try {
        console.log(req);
        let list = await pool.query('select title, content, creation_time, cluster_id from trash where cluster_id = ?', req);
        return list[0]
    } catch (error) {
        return Error(error);
    }
}

exports.selectTrash = async (req) => {
    try {
        let trash = await pool.query('select trash_id from trash where trash_id = ?', req);
        return trash[0];
    } catch (error) {
        return Error(error);
    }
}

exports.deleteTrash = async (req) => {
    try {
        console.log(req);
        await pool.query('delete from trash where trash_id=?', req);
        return;
    } catch (error) {
        return Error(error);
    }
}

exports.selectCluster = async (req) => {
    try {
        let trash = await pool.query('select * from trash where user_id = ?', req);
        return trash[0];
    } catch (error) {
        return Error(error);
    }
}

exports.insertArticle = async (req) => {
    try {
        console.log(req);
        let cluster_id = req[0];
        let keyword = req[1];
        let trash_id = req[2]
        await pool.query('update trash set cluster_id = ?, keyword = ? where trash_id = ?  ', [cluster_id, keyword, trash_id]);
        return;
    } catch (error) {
        return Error(error);
    }
}

exports.getTrash = async (req) => {
    try {
        let user = await pool.query('select trash_id from trash where user_id = ?', req);
        return user[0];
    } catch (error) {
        return Error(error);
    }
}