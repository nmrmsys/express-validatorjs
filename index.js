'use strict'

const Validator = require('validatorjs');
// const debug = require('debug')('expressValidatorjs');

module.exports = expressValidatorjs

function expressValidatorjs(init) {
    return function(req, res, next) {
        req.validator = function(rules) {
            if(init)
                init(Validator);
            const validator = new Validator(req.input(), rules);
            return validator;
        };
        next();
    }
}
