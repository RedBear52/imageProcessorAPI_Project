import sharp from 'sharp'
import path from 'path'

const processImage = async (
    imgPath: string,
    filename: string,
    width: number,
    height: number
): Promise<void> => {
    const procImgPath = path.resolve(
        `./processed_images/${filename}_${width}x${height}.jpg`
    )
    await sharp(imgPath)
    .resize(parseInt(`${width}`), parseInt(`${height}`), {
        fit: sharp.fit.cover,
        withoutEnlargement: false,
    })
    .toFile(procImgPath)
}

export default processImage
