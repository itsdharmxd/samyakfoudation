const Validator = require('validator')
const isEmpty = require('./is-empty');

module.exports = function validateUserInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';
    data.date = !isEmpty(data.date) ? data.date : '';
    data.avatar = !isEmpty(data.avatar) ? data.avatar : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Should be email';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'password is required';
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'confirm password is required';
    }
    if (data.password!=data.password2) {
        errors.password2 = 'confirm password must match';
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = 'Date is required';
    }
    
 
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
