// var pool = require('../../middleware/database');
const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'user',
    password: '990311',
    database: 'AsMe'
};

var connection = mysql.createConnection(conn); // DB 커넥션 생성
conn.connect();   // DB 접속
 
var testQuery = "INSERT INTO `members` (`username`,`password`) VALUES ('test','test');";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
testQuery = "SELECT * FROM MEMBERS";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end(); // DB 접속 종료
