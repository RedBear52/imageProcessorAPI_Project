import sharp from 'sharp'

const resizeImage = (filename, width, height) => {
    sharp(`../images/${filename}.jpg`)
    .resize(`${width}, ${height}`)
    .toFile(`../processed_images/resized_${filename}_${width}x${height}.jpg`)
}

// resizeImage()