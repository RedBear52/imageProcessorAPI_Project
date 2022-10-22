import express from 'express'
import sharp from 'sharp'
const grayscaleRoute = express.Router()

grayscaleRoute.get('/', async (req, res) => {
    const filename = req.query.filename
    // const saturation = req.query.saturation
    // const brightness = req.query.brightness

    sharp(`./images/${filename}.jpg`)
        .grayscale()
        .toBuffer()
        .then((data) => {
            res.type('jpg').send(data)
        })
})
export default grayscaleRoute
