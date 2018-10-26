const express = require('express');
const db = './db.js'

const api = express();

function updateUsers  (usersReady) {
    db.getUsers((rows) => {
        cities = rows;
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

api.listen(8002, () => {
    console.log('Listening on port 8002')
});