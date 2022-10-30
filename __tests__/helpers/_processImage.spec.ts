import path from 'path'
import fs from 'fs'
import resizeImage from '../../src/routes/api/processFactory/resizeImage'
const filename = 'mocco'
const width = 999
const height = 888

describe('Test processImage module functionality', () => {
    it(
        `Creates a new resized image and saves it to the 'processed_images' dir`, async () => {
        await resizeImage(
            path.resolve(`./images/mocco.jpg`),
            filename, 
            width, 
            height) 
        expect(fs.existsSync(`processed_images/${filename}_${width}x${height}.jpg`)).toBeTrue()
    })
})