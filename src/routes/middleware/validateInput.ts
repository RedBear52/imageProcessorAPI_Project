import express from 'express'
import fs from 'fs'
import path from 'path'

const validateInput = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const imgPath = path.resolve(`./images/${req.query.filename}.jpg`)

    if (!(req.query.filename || req.query.width || req.query.height)) {
        res.status(400)
        next('Error: Your query string must include filename, width & height parameters')
    } else if (isNaN(parseInt(`${req.query.width}`))) {
        res.status(400)
        next('Error: Your query string is missing a proper WIDTH parameter - Please enter a numerical value')
    }  else if (isNaN(parseInt(`${req.query.height}`))) {
        res.status(400)
        next('Error: Your query string is missing a proper HEIGHT parameter - Please enter a numerical value')
    }  else if ((parseInt(`${req.query.height}`) <= 0)) {
        res.status(400)
        next(`Error: Improper parameter input.
        Please enter a numerical value greater than ZERO.` )
    } else if (!req.query.filename || parseInt(`${req.query.filename}`)) {
        res.status(400)
        next(`Error: Your query string is missing a proper FILENAME parameter.
        Please enter a filename that exists and make sure to use a string to do so.
        HINT: Numerical values will not work.`)
    }  else if (fs.existsSync(imgPath)) {
        next()
    }  else {
        res.status(400)
        next('Error: Filename is invalid. Please choose an extant file, make sure it is spelled correctly and make sure it is a STRING.')
    }
}

export default validateInput