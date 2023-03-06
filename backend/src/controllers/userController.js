const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// Create a new user
exports.createUser = asyncHandler(async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body

        if (!firstName || !lastName || !email || !phone || !password) {
            res.status(400).json({ message: 'Pls! Proper form full filled.' })
        } else {
            const userExists = await User.findOne({ email })
            if (userExists) {
                throw new Error('User already exists')
            } else {
                const user = new User({ firstName, lastName, email, phone, password })
                await user.save()
                res.status(201).json({ message: 'User create successfully' })
            }

        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message || 'Internal Server Error' })
    }
})


// User find by email
exports.getUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) {
            res.status(400).json({ message: 'Pls! Proper form full filled.' })
        } else {
            const user = await User.findOne({ email })
            if (user && await user.isPasswordMatched(password)) {

                res.status(200).json({ message: 'User Login successfully' })
            } else {
                throw new Error('Invalied Credentials')
            }
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message || 'Internal Server Error' })
    }
})



