import express from 'express'
import fs from 'fs'
import path from 'path'
import processImage from './processImage'
const resizeRoute = express.Router()

resizeRoute.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        const filename: string = req.query.filename as string
        const width: number = parseInt(`${req.query.width}`)
        const height: number = parseInt(`${req.query.height}`)
        const imgPath = path.resolve(`./images/${filename}.jpg`)
        const procImgPath = path.resolve(
            `./processed_images/${filename}_${width}x${height}.jpg`
        )

        if (!fs.existsSync(procImgPath)) {
            await processImage(imgPath, filename, width, height)
            res.sendFile(procImgPath)
        } else {
            res.sendFile(procImgPath)
        }
    }
)

export default resizeRoute
