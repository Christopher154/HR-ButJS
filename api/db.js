const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'owen',
    password: 'password',
    database: 'employees'
})

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL")
})

exports.addUser = (data, callback) => {
    db.query(
        'INSERT INTO Employee (department_id, first_name, last_name, address, nin, iban, starting_salary) \
         VALUES (?, ?, ?, ?, ?, ?, ?)',
         [data.department_id, data.first_name, data.last_name, data.address, data.nin, data.iban, data.starting_salary],
         function(err, results, fields){
            if(err) throw err;
            callback(results.insertId)
         }
    )
};

exports.getUsers = (callback) => {
    db.query(
        'SELECT first_name, last_name, address, nin, iban, starting_salary FROM Employee',
        function(err, rows) {
            if(err) throw err;
            callback(rows);
        }

    )
}

exports.getEmployeeReport = (department, callback) => {
    db.query(
        'CALL generateReport(?)',
        department,
        (error, results, fields) => {
            if(error) throw error;
            callback(results)
        }
    )
}