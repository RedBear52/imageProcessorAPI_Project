import routes from '../routes/index'
import express from 'express'

const app = express()
const port = 3200

app.use('/api', routes)

app.listen(port, () => {
    console.log(`server awake and listening at: ${port}`)
})

export default app
