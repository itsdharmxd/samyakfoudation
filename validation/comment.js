const Validator = require('validator')
const isEmpty = require('./is-empty');

module.exports = function validateCommentInput(data) {
    let errors = {};

    data.user = !isEmpty(data.user) ? data.user : '';
    data.text = !isEmpty(data.text) ? data.text : '';
    data.date = !isEmpty(data.date) ? data.date : '';
   

    if (Validator.isEmpty(data.user)) {
        errors.user = 'User is required';
    }
    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text is required';
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = 'Date field is required';
    }

  

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
