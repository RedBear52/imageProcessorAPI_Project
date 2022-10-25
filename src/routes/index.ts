import express from 'express'
import resizeRoute from './api/resize'
import validateInput from './middleware/validateInput'

const routes = express.Router()

routes.use('/resize', validateInput, resizeRoute)

routes.get('/', (req: express.Request, res:express.Response) => {
    res.send('api route !')
})

export default routes
