var pool = require('../../middleware/database');

exports.signin = async (id, password) => {
    try {
        let user = await pool.query('select * from users where id=? and password=?', [id, password]);
        return user[0];
    } catch (error) {
        throw Error(error);
    }
}

exports.signup = async (id, password, name) => {
    try {
        let ok = await pool.query('insert into users (id, password, name) values (?, ?, ?)', [id, password, name]);
        return ok;
    } catch (error) {
        throw Error(error);
    }
}

exports.selectUser = async (id) => {
    try {
        let user = await pool.query('select user_id from users where id=?', id);
        return user[0];
    } catch (error) {
        throw Error(error);
    }
}