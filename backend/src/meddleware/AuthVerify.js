const bycrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')



const authVerify = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization &&
        req.headers.authorization?.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (err) {
            console.log(err.message)
            res.status(401)
            throw new Error('Invalid token')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Invalid token')
    } 


})

module.exports = authVerify