const express = require('express');
const db = './db.js'

const api = express();


api.listen(8002, () => {
    console.log('Listening on port 8002')
});