import express from 'express'
import resizeRoute from './api/resize'
import grayscaleRoute from './api/grayscale'
import claheRoute from './api/clahe'
import validateInput from './middleware/validateInput'

const routes = express.Router()

routes.use('/resize', validateInput, resizeRoute)
routes.use('/grayscale', grayscaleRoute)
routes.use('/clahe', claheRoute)

routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('api route !')
})

export default routes
