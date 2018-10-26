const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'chris',
    password: 'password',
    database: 'world'
})

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL")
})

exports.addUser = (data, callback) => {
}