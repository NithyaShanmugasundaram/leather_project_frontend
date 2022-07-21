const express = require("express");
const router = express.Router()
const { check, validationResult } = require('express-validator');
const User = require('../../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
router.post('/',
    [check('user_name', 'Name is required.').not().isEmpty(),
    check('user_email', 'Please include a valid email').isEmail(),
    check('user_password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            const { user_name, user_email, user_password } = req.body
            let user = await User.findOne({ user_email })
            if (user) {
                return res.status(400).json({ errors: [{ msg: "User alredy exists" }] })
            }
            user = new User({
                user_name,
                user_email,
                user_password,

            })
            const salt = await bcrypt.genSalt(10)
            user.user_password = await bcrypt.hash(user_password, salt)
            await user.save()
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 3600 },
                (err, token) => {
                    if (err) {
                        throw err
                    }
                    res.json({ token })
                })
        }
        catch (err) {
            console.log(err.message)
            res.status(500).json('Server error!')
        }
    }
)
module.exports = router;