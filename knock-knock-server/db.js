const mysql = require("mysql");
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'knock'
  });

connection.connect((err) => {
    if (err) { 
      console.log(err);
      return;
    }
});

function insertUser(pass, nickName) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users (user_password, user_nickname) VALUES (?, ?)`, [pass, nickName], (err, res) => {
          if(err) {
            reject(err);
            return;
          }
          resolve(res);
        });
      });
};

function checkUser(pass, nickName) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM users WHERE user_password = ? AND user_nickname = ?`, [pass, nickName], (err, res) => {
      if(err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

module.exports = {
    insertUser: insertUser,
    checkUser: checkUser,
  };