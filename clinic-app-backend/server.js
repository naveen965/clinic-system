const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 8081;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "clinic"
})

app.get("/patients", (req, res) => {
    const sql = "SELECT * from patients";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        //res.send('<h1> Hello, Express.js Server! <h1/>');
        return res.json(data);
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})