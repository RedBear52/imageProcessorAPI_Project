import express from 'express'

const validateInput = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    if (!(req.query.filename || req.query.width || req.query.height)) {
        res.status(400)
        next('Error: Your query string must include filename, width & height parameters')
    } else {
        next()
    }
}

export default validateInput