const mysql = require('mysql');
const { DB_CONFIG } = require('../config/db');

class User {
    static async getUserByEmail(email) {
        const connection = mysql.createConnection(DB_CONFIG);
        try {
            const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
            return rows[0];
        } finally {
            connection.end();
        }
    }

    static async createUser(firstname, lastname, email, password) {
        const connection = mysql.createConnection(DB_CONFIG);
        try {
            const [result] = await connection.execute('INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?)', [firstname, lastname, email, password]);
            return result.insertId;
        } finally {
            connection.end();
        }
    }
}

module.exports = User;
