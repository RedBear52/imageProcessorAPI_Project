import express from 'express'
import fs from 'fs'
import path from 'path'
import claheImage from './processFactory/claheImage'

const claheRoute = express.Router()

claheRoute.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        const filename: string = req.query.filename as string
        const width: number = parseInt(`${req.query.width}`)
        const height: number = parseInt(`${req.query.height}`)
        const imgPath = path.resolve(`./images/${filename}.jpg`)
        const procImgPath = path.resolve(
            `./processed_images/clahe_${filename}_${width}_${height}.jpg`
        )

        if (!fs.existsSync(procImgPath)) {
            await claheImage(imgPath, filename, width, height)
            console.log(imgPath, filename)
            res.sendFile(procImgPath)
        } else {
            res.sendFile(procImgPath)
        }
    }
)

export default claheRoute
