const sharp = require('sharp')

const tintImage = () => {
    sharp('../images/happel.jpg')
    .tint({r: 127, g: 100, b: 129})
    .toFile('../processed_images/tint__exp_happel.jpg')
}

tintImage()