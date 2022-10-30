import sharp from 'sharp'
import path from 'path'

const grayscaleImage = async (
    imgPath: string,
    filename: string,
): Promise<void> => {
    const procImgPath = path.resolve(
        `./processed_images/grayscale_${filename}.jpg`
    )
    await sharp(imgPath)
        .grayscale()
        // .toBuffer()
        .toFile(procImgPath)
}

export default grayscaleImage