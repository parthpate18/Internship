const path = require('path');
const express = require('express');
const app = express();
console.log(path.join(__dirname, '../public'));


const staticpath = path.join(__dirname, '../public');

app.use(express.static(staticpath));

app.get('/', (req, res) => {
    res.send("Welcome to My home Page")
});

app.listen(3000, () => {
    console.log("server is running")
});