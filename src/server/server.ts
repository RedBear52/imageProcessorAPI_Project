import sharp from 'sharp'
import routes from '../routes/index'

const express = require('express')
const app = express()
const port = 3200


app.use('/api', routes)

// app.get(
//     '/api/resize',
//     async (
//         req: { query: { filename: any; width: any; height: any } },
//         res: {
//             type: (arg0: string) => {
//                 (): any
//                 new (): any
//                 send: { (arg0: Buffer): void; new (): any }
//             }
//         }
//     ) => {
//         const filename = req.query.filename
//         const width = req.query.width
//         const height = req.query.height

//         sharp(`./images/${filename}.jpg`)
//             .resize(parseInt(width), parseInt(height), {
//                 fit: sharp.fit.inside,
//                 withoutEnlargement: false,
//             })
//             .toBuffer()
//             .then((data) => {
//                 res.type('jpg').send(data)
//             })
//     }
// )

app.listen(port, () => {
    console.log(`server awake and listening at: ${port}`)
})
