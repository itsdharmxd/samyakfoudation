// const { default: validator } = require('validator');
const Validator = require('validator').default
const isEmpty = require('./is-empty');

module.exports = function validateMainPCInput(data) {
    let errors = {};

    data.main = !isEmpty(data.main) ? data.main : '';
    data.profile = !isEmpty(data.profile) ? data.profile : '';
    data.slider1 = !isEmpty(data.slider1) ? data.slider1 : '';
    data.slider2 = !isEmpty(data.slider2) ? data.slider2 : '';
    data.slider3 = !isEmpty(data.slider3) ? data.slider3 : '';
    data.slider4 = !isEmpty(data.slider4) ? data.slider4 : '';
    data.slider5 = !isEmpty(data.slider5) ? data.slider5 : '';
    data.wwwb1 = !isEmpty(data.wwwb1) ? data.wwwb1 : '';
    data.wwwb2 = !isEmpty(data.wwwb2) ? data.wwwb2 : '';
    data.wwwb3 = !isEmpty(data.wwwb3) ? data.wwwb3 : '';
    data.wwwb4 = !isEmpty(data.wwwb4) ? data.wwwb4 : '';
    // data.humanity = !isEmpty(data.humanity) ? data.humanity : '';
    // data.god = !isEmpty(data.god) ? data.god : '';
    // data.salvation = !isEmpty(data.salvation) ? data.salvation : '';
    // data.grace = !isEmpty(data.grace) ? data.grace : '';


    
    if (!Validator.isURL(data.profile)) {
        errors.profile = 'profile must be url';
    }

    
    if (!Validator.isURL(data.slider1)) {
        errors.slider1 = 'photo must be url';
    }
    
    if (!Validator.isURL(data.slider2)) {
        errors.slider2 = 'photo must be url';
    }
    
    if (!Validator.isURL(data.slider3)) {
        errors.slider3 = 'photo must be url';
    }
    
    if (!Validator.isURL(data.slider4)) {
        errors.slider4 = 'photo must be url';
    }
    
    if (!Validator.isURL(data.slider5)) {
        errors.slider5 = 'photo must be url';
    }
    
    if (!Validator.isURL(data.wwwb1)) {
        errors.wwwb1 = 'photo must be url';
    }
    
    if (!Validator.isURL(data.wwwb2)) {
        errors.wwwb2 = 'photo must be url';
    }
    
    if (!Validator.isURL(data.wwwb3)) {
        errors.wwwb3 = 'photo must be url';
    }
    
    if (!Validator.isURL(data.wwwb4)) {
        errors.wwwb4 = 'photo must be url';
    }


    // if (Validator.isEmpty(data.humanity)) {
    //     errors.humanity = 'text  is requires';
    // }
    // if (Validator.isLength(data.humanity,{min})) {
    //     errors.humanity = 'text  is requires';
    // }

    if (Validator.isEmpty(data.main)) {
        errors.main = 'main is required';
    }
    if (Validator.isEmpty(data.profile)) {
        errors.profile = 'profile is requires';
    }
    

    if (Validator.isEmpty(data.slider1)) {
        errors.slider1 = 'photo is requires';
    }
    
    if (Validator.isEmpty(data.slider2)) {
        errors.slider2 = 'photo is requires';
    }
    
    if (Validator.isEmpty(data.slider3)) {
        errors.slider3 = 'photo is requires';
    }
    
    if (Validator.isEmpty(data.slider4)) {
        errors.slider4 = 'photo is requires';
    }
    
    if (Validator.isEmpty(data.slider5)) {
        errors.slider5 = 'photo is requires';
    }
    
    if (Validator.isEmpty(data.wwwb1)) {
        errors.wwwb1 = 'photo is requires';
    }
    
    if (Validator.isEmpty(data.wwwb2)) {
        errors.wwwb2 = 'photo is requires';
    }
    
    if (Validator.isEmpty(data.wwwb3)) {
        errors.wwwb3 = 'photo is requires';
    }
    
    if (Validator.isEmpty(data.wwwb4)) {
        errors.wwwb4 = 'photo is requires';
    }
    

    

    // if (Validator.isEmpty(data.god)) {
    //     errors.god = 'text  is requires';
    // }


    // if (Validator.isEmpty(data.salvation)) {
    //     errors.salvation = 'text  is requires';
    // }



    // if (Validator.isEmpty(data.grace)) {
    //     errors.grace = 'text  is requires';
    // }



   



    return {
        errors,
        isValid: isEmpty(errors)
    };
};
