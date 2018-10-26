const express = require('express');
const db = require('./db.js')

const api = express();
api.use(express.json())

function updateUsers  (usersReady) {
    db.getUsers((rows) => {
        users = rows;
        usersReady();
    })
}

users = []

api.post('/adduser', (req, res) => {
    db.addUser(req.body, (insertedKey) => {
        updateUsers(() => {
            res.send(users)
        })
    })
})

api.post('/generateEmployeeReport', (req, res) => {
    db.getEmployeeReport(req.body, (results) => {
        users = results;
        res.send(users)
    })
})

api.get('/departments', (req, res) => {
    db.getDepartments((results) => {
        users = results;
        res.send(users)
    })
})

api.listen(8002, () => {
    console.log('Listening on port 8002')
});
