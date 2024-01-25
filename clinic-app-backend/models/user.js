const mysql = require('mysql');
const { DB_CONFIG } = require('../config/db');

class User {
    static async getUserByEmail(email) {
        const connection = mysql.createConnection(DB_CONFIG);
        try {
            const [rows] = await connection.execute('SELECT * FROM user WHERE email = ?', [email]);
            return rows[0];
        } finally {
            connection.end();
        }
    }

    static async createUser(email, password) {
        const connection = mysql.createConnection(DB_CONFIG);
        try {
            const [result] = await connection.execute('INSERT INTO user (email, password) VALUES (?, ?)', [email, password]);
            return result.insertId;
        } finally {
            connection.end();
        }
    }

    // You may need additional methods here based on your requirements
}

module.exports = User;
