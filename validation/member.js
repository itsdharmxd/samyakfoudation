const Validator = require('validator')
const isEmpty = require('./is-empty');

module.exports = function validateMemberInput(data) {
    let errors = {};

    data.picture = !isEmpty(data.picture) ? data.picture : '';
    data.name = !isEmpty(data.name) ? data.name : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.dateofjoining = !isEmpty(data.dateofjoining) ? data.dateofjoining : '';

    
    if (!Validator.isURL(data.picture)) {
        errors.picture = 'Picture should be URL';
    }
    
    if (Validator.isEmpty(data.picture)) {
        errors.picture = 'Picture is required';
    }

    if (Validator.isEmpty(data.name )){
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.status)) {
        errors.status = 'Status field is required';
    }


    if  (Validator.isEmpty(data.description)) {
        errors.description = 'Description date field is required';
    }
    if (!Validator.isLength(data.description,{min:20,max:81})) {
        errors.description = 'Description must be between 20 to 81 characters';
    }
    if (Validator.isEmpty(data.dateofjoining)) {
        errors.dateofjoining = 'dateofjoining date field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
