import express from 'express'

const validateInput = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    if (!(req.query.filename || req.query.width || req.query.height)) {
        res.status(400)
        next('Error: Your query string must include filename, width & height parameters')
    } else if (isNaN(parseInt(`${req.query.width}`))) {
        res.status(400)
        next('Error: Your query string is missing a proper WIDTH parameter - Please enter a numeric value')
    }  else if (isNaN(parseInt(`${req.query.height}`))) {
        res.status(400)
        next('Error: Your query string is missing a proper HEIGHT parameter - Please enter a numeric value')
    }  else {
        next()
    }
}

export default validateInput