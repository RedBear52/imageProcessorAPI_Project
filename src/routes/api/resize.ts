import express from 'express'
const resizeRoute = express.Router()

resizeRoute.get('/', (req, res) => {
    res.send('you found the RESIZE route')
})

export default resizeRoute