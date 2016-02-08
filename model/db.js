var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database:'nodejs',
    user: 'type your db username',
    password: 'type your db password'
});

connection.connect();

module.exports = connection;


