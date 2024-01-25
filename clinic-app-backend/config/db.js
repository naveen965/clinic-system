const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const DB_CONFIG = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to the database:',err);
        return;
    }
    console.log('Connected to the database');
});

const SECRET_KEY = process.env.SECRET_KEY || 'fallbackSecretKey'; // Use a fallback value if the environment variable is not set

module.exports = {
    SECRET_KEY,
    // Other configuration properties...
};

module.exports = connection;