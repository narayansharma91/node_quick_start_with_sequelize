const { check } = require('express-validator/check');

const userCreateValidationRules = () => [
  check('firstName')
    .exists()
    .withMessage('First Name should not be empty'),
  check('lastName')
    .exists()
    .withMessage('Last Name should not be empty'),
  check('email')
    .exists()
    .withMessage('Email should not be empty')
    .isEmail()
    .withMessage('Invalid email'),
  check('userTypeId')
    .exists()
    .withMessage('Last Name should not be empty')
    .isNumeric()
    .withMessage('UserTypeId should be numeric value'),
];
module.exports = { userCreateValidationRules };
