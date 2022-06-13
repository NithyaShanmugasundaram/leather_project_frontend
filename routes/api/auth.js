const express = require("express");
const router = express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/Users')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.get('/', auth, async (req, res) => {
    console.log(req)
    try {
        const user = await User.findById(req.user.id).select('-user_password')
        res.json(user)
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json('Server Error')

    }
}),
    router.post('/',
        [
            check('user_email', 'Please include a valid email').isEmail(),
            check('user_password', 'Password is required').exists()],
        async (req, res) => {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            try {
                const { user_email, user_password } = req.body
                console.log(user_email)
                let user = await User.findOne({ user_email })
                console.log(user)
                if (!user) {
                    return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] })
                }
                const isMatch = bcrypt.compare(user_password, user.user_password)
                if (!isMatch) {
                    return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] })
                }

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