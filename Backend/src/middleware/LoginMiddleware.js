
// Login middleware
const joi = require('joi');

const LoginValidate = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(5).max(10).required()
    });

    const {error} = schema.validate(req.body);
    if(error) {
        return res.status(400)
        .json({
            
            message: "request failed", error,
            
        })
    }
    next();
}

module.exports =  LoginValidate;