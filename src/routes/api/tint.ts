import express from 'express'
const tintRoute = express.Router()

tintRoute.get('/', (req, res) => {
    res.send('you found the TINT route')
})

export default tintRoute