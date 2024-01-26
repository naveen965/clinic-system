const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const DB_CONFIG = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const SECRET_KEY = process.env.SECRET_KEY || 'fallbackSecretKey'; // Use a fallback value if the environment variable is not set

const connection = mysql.createConnection(DB_CONFIG);

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to the database:',err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = {
    DB_CONFIG,
    SECRET_KEY,
    connection,
};

module.exports = connection;