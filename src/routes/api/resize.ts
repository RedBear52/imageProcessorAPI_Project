import express from 'express'
import sharp from 'sharp'
const resizeRoute = express.Router()

// resizeRoute.get('/', (req, res) => {
//     res.send('you found the RESIZE route')
// })

resizeRoute.get(
    '/',
    async (req, res ) => {
        const filename = req.query.filename
        const width = req.query.width
        const height = req.query.height

        sharp(`./images/${filename}.jpg`)
            .resize(parseInt(`${width}`), parseInt(`${height}`), {
                fit: sharp.fit.inside,
                withoutEnlargement: false,
            })
            .toBuffer()
            .then((data) => {
                res.type('jpg').send(data)
            })
    }
)
export default resizeRoute