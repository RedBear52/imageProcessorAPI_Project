import sharp from 'sharp'
import routes from '../routes/index'

const express = require('express')
const app = express()
const port = 3200


app.use('/api', routes)



app.listen(port, () => {
    console.log(`server awake and listening at: ${port}`)
})
