const express = require('express')
const app = express()
const sharp = require('sharp')

app.get('/api/resize', async (req, res) => {
    const filename = req.query.filename
    const width = req.query.width
    const height = req.query.height

    sharp(`./images/${filename}.jpg`)
    .resize(parseInt(width), parseInt(height), {
        fit: sharp.fit.inside,
        withoutEnlargement: false
      })
    .toBuffer()
    .then(data => { res.type('jpg').send(data) })
})

const port = 3200
app.listen(port, () => {
   console.log(`server awake and listening at: ${port}`)
})