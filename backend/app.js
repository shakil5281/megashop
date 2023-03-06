// internal requirements
const express = require('express');
const app = express();
const userRouter = require('./src/router/userapi')
const {errorHendler, notFound} = require('./src/meddleware/errorHendler')


// external requirements



//
app.use(express.json())




// router configuration
app.use(userRouter)

// error handler configuration
app.use(notFound)
app.use(errorHendler)



app.use('*', (req, res) =>{
    res.status(500).json({message: 'Router not found'})
})







module.exports = app;

