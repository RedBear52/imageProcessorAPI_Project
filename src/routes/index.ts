import express from 'express'
import resizeRoute from './api/resize'
import tintRoute from './api/tint'
import grayscaleRoute from './api/grayscale'
const routes = express.Router()

routes.use('/resize', resizeRoute)
routes.use('/tint', tintRoute)
routes.use('/grayscale', grayscaleRoute)

routes.get('/', (req, res) => {
    res.send('api route !')
  })

  export default routes 