
const { body, validationResult } = require('express-validator');


const validateSearchData = [
    body('Title').isString().withMessage('Must be string').notEmpty().withMessage('Username is required'),
    body('MovieID').isInt().withMessage('must be number').notEmpty().withMessage('Username is required'),
    body('Poster').isURL().withMessage('must be URL').notEmpty().withMessage('Username is required'),
    (req, res, next) => {
        const errors = validationResult(req)
        console.log(errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        next()
    }
]

module.exports = validateSearchData