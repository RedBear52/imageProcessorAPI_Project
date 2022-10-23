import express from 'express'
import { isNumber } from 'util'

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
    }  else if (!req.query.filename || parseInt(`${req.query.filename}`)) {
        res.status(400)
        next(`Error: Your query string is missing a proper FILENAME parameter.
        Please enter a filename that exists and make sure to use a string to do so.
        Numerical values will not work.`)
    }  else {
        next()
    }
}

export default validateInput