const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user');
const { SECRET_KEY } = require('../config/db');

class UserController {
    static async register(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            const existingUser = await User.getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ error: 'User already exists' });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const userId = await User.createUser(email, hashedPassword);

            res.status(201).json({ message: 'User registered successfully', userId });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        }
    }

    static async login(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        //const secret = 'your-secret-key';

        try {
            const user = await User.getUserByEmail(email);
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const accessToken = jwt.sign({ userId: user.id }, SECRET_KEY, {
                expiresIn: '15m',
            });

            console.log("Token: " + accessToken);
            const refreshToken = jwt.sign({ userId: user.id }, SECRET_KEY, {
                expiresIn: '7d',
            });

            res.status(200).json({ accessToken, refreshToken });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server Error' });
        }
    }
}

module.exports = UserController;