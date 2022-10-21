import express from 'express'
const grayscaleRoute = express.Router()

grayscaleRoute.get('/', (req, res) => {
    res.send('you found the GRAYSCALE route')
})

export default grayscaleRoute