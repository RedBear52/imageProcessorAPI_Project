import express from 'express'
import sharp from 'sharp'
const tintRoute = express.Router()

tintRoute.get(
    '/',
    async (req, res ) => {
        const filename = req.query.filename
        const red = req.query.red
        const green = req.query.green
        const blue = req.query.blue

        console.log(req.query);
        
        sharp(`./images/${filename}.jpg`)
            .tint({ r: parseInt(`${red}`), g: parseInt(`${green}`), b: parseInt(`${blue}`) })
            .toBuffer()
            .then((data) => {
                res.type('jpg').send(data)
            })
    }
)
export default tintRoute