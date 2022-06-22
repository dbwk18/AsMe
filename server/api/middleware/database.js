
const mysql = require('mysql2/promise');
const config = require('../config/config.json')["development"]

const connection = mysql.createPool({
    host: config.host,
    user: config.user,
    port: config.port,
    password: config.password,
    database: config.database
});


module.exports = connection;