  const joi = require("joi");  // joi  is a validation liberary 



//   signup  middleware 

const SignupValidate  = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(5).max(10).required()
    });

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({ message: "request failed", error });
    }
    next();


}

module.exports =   SignupValidate;