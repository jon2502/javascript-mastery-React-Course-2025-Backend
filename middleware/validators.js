
const { body, validationResult } = require('express-validator');


const validateSearchData = [
    body('Title').isNumeric().withMessage('Must be string').notEmpty().withMessage('Username is required'),
    body('MovieID').isString().withMessage('must be number').notEmpty().withMessage('Username is required'),
    body('Poster').isURL().withMessage('must be URL').notEmpty().withMessage('Username is required'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        next()
    }
]

module.exports = validateSearchData