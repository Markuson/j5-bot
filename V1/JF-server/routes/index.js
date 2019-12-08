const express = require('express')
const logic = require('../logic')
const bodyParser = require('body-parser')
const handleErrors = require('./handle-errors')
const jwt = require('jsonwebtoken')
const auth = require('./auth')

const { env: { JWT_SECRET } } = process

const jsonParser = bodyParser.json()

const router = express.Router()


router.get('/test', (req, res) => {
    res.status(201).send('test OK')
})

router.post('/move', jsonParser, (req,res) => {
    const { body: { dir, vel, time } } = req
    const motors = req.app.get('motors');

    handleErrors(() => {
        const response = logic.motors(motors, dir, vel, time)
        res.status(201).json(response)
    },res)

})


module.exports = router