const Validator = require('validator').default
const isEmpty = require('./is-empty');

module.exports = function validateEventInput(data) {
    let errors = {};

    data.header = !isEmpty(data.header) ? data.header : '';
    // data.mainBool = !isEmpty(data.mainBool) ? data.mainBool : '';
    data.shortabout = !isEmpty(data.shortabout) ? data.shortabout : '';
    data.about = !isEmpty(data.about) ? data.about : '';
    data.location = !isEmpty(data.location) ? data.location : '';
    data.photo1 = !isEmpty(data.photo1) ? data.photo1 : '';
    data.photo2 = !isEmpty(data.photo2) ? data.photo2 : '';
    data.photo3 = !isEmpty(data.photo3) ? data.photo3 : '';
    data.photo4 = !isEmpty(data.photo4) ? data.photo4 : '';
    data.photo5 = !isEmpty(data.photo5) ? data.photo5 : '';
    data.membersPresent = !isEmpty(data.membersPresent) ? data.membersPresent : '';


    data.date = !isEmpty(data.date) ? data.date : '';


    if (Validator.isEmpty(data.header)) {
        errors.header = 'header is required';
    }
    // if (Validator.isEmpty(data.mainBool)) {
    //     errors.mainBool = 'mainBool is required';
    // }

    if (Validator.isEmpty(data.shortabout)) {
        errors.shortabout = 'shortabout field is required';
    }

    if (Validator.isEmpty(data.about)) {
        errors.about = 'about field is required';
    }
    if (!Validator.isLength(data.about,{min:10})) {
        errors.about = 'about field min 10';
    }

    if (Validator.isEmpty(data.location)) {
        console.log(data.location+"loca")
        errors.location = 'Location field is required';
    }

    
    if (Validator.isEmpty(data.photo1)) {
        errors.photo1 = 'Photo  field is required';
    }
   
    if (Validator.isEmpty(data.photo2)) {
        errors.photo2 = 'Photo  field is required';
    }
   
    if (Validator.isEmpty(data.photo3)) {
        errors.photo3 = 'Photo  field is required';
    }
  
    if (Validator.isEmpty(data.photo4)) {
        errors.photo4 = 'Photo  field is required';
    }
   
    if (Validator.isEmpty(data.photo5)) {
        errors.photo5 = 'Photo  field is required';
    }
    if (!Validator.isURL(data.photo3)) {
        errors.photo3 = 'Photo  filed must be url';
    }
    if (!Validator.isURL(data.photo1)) {
        errors.photo1 = 'Photo  filed must be url';
    }
    if (!Validator.isURL(data.photo2)) {
        errors.photo2 = 'Photo  filed must be url';
    }
    if (!Validator.isURL(data.photo5)) {
        errors.photo5 = 'Photo  filed must be url';
    }
    if (!Validator.isURL(data.photo4)) {
        errors.photo4 = 'Photo  filed must be url';
    }

    if (Validator.isEmpty(data.membersPresent)) {
        errors.membersPresent = 'please enter list of members';
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = 'please enter date';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };
};
