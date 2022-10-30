import express from 'express'
import fs from 'fs'
import path from 'path'
import grayscaleImage from './processFactory/grayscaleImage'
const grayscaleRoute = express.Router()

grayscaleRoute.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        const filename: string = req.query.filename as string
        const imgPath = path.resolve(`./images/${filename}.jpg`)
        const procImgPath = path.resolve(
            `./processed_images/grayscale_${filename}.jpg`
        )

        if (!fs.existsSync(procImgPath)) {
            await grayscaleImage(imgPath, filename)
            res.sendFile(procImgPath)
        } else {
            res.sendFile(procImgPath)
        }
    }
)

export default grayscaleRoute