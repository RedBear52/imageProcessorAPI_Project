import sharp from 'sharp'

const convertToGrayScale = () => {
    sharp('images/happel.jpg')
    .grayscale()
    .toFile('processed_images/grayscale_happel.jpg')
}

convertToGrayScale()