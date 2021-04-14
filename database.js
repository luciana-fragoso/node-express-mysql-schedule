var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'schedules'
});

connection.connect(function(err) {
    if (err) {
        console.log("Unable to connect database");
        //throw err;
    }
});

module.exports = connection;

