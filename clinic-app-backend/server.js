import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'finance'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`firstname`, `lastname`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }

        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?"
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        
        if(data.length > 0){
            return res.json("Success");
        }
        else{
            return res.json("Fail");
        }
    })
})

app.listen(8081, () => {
    console.log("Running...");
})

// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// const port = process.env.PORT || 8081;

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "clinic"
// })

// app.get("/patients", (req, res) => {
//     const sql = "SELECT * from patients";
//     db.query(sql, (err, data) => {
//         if(err) return res.json("Error");
//         //res.send('<h1> Hello, Express.js Server! <h1/>');
//         return res.json(data);
//     })
// })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })

// const express = require('express');
// const userRoutes = require('./routes/userRoutes');
// const app = express();

// app.use(express.json());

// app.use('/user', userRoutes);

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });