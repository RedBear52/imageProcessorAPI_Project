import sharp from 'sharp'

const resizeImage = (filename: string, width: number, height: number) => {
    sharp(`../images/${filename}.jpg`)
        .resize(width, height)
        .toFile(
            `../processed_images/resized_${filename}_${width}x${height}.jpg`
        )
}

export default resizeImage
