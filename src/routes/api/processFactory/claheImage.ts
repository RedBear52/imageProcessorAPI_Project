import sharp from 'sharp'
import path from 'path'
import { parse } from 'path/posix'

const claheImage = async (
    imgPath: string,
    filename: string,
    width: number,
    height: number
): Promise<void> => {
    const procImgPath = path.resolve(
        `./processed_images/clahe_${filename}_${width}_${height}.jpg`
    )
    await sharp(imgPath)
        .clahe({
            width: parseInt(`${width}`),
            height: parseInt(`${height}`)
        })
        // .toBuffer()
        .toFile(procImgPath)
}

export default claheImage