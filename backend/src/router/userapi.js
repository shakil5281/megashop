const express = require('express');
const userRouter = express.Router()
const userController = require('../controllers/userController')



userRouter.route('/create').post(userController.createUser)
userRouter.route('/login').post(userController.getUser)





module.exports = userRouter