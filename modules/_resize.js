const sharp = require('sharp')

const resizeImage = (picName, width, height) => {
    sharp(`../images/${picName}.jpg`)
    .resize(`${width}, ${height}`)
    .toFile(`../processed_images/resized_${picName}_${width}x${height}.jpg`)
}

resizeImage()