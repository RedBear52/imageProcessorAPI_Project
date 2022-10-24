import express from 'express'
import resizeRoute from './api/resize'
import validateInput from './middleware/validateInput'

const routes = express.Router()

routes.use('/resize', validateInput, resizeRoute)

routes.get('/', (req, res) => {
    res.send('api route !')
})

export default routes
