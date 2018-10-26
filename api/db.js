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

exports.getUsers = (callback) => {
    db.query(
        'SELECT first_name, last_name, address, nin, iban, starting_salary FROM Employee',
        function(err, rows) {
            if(err) throw err;
            callback(rows);
        }

    )
}