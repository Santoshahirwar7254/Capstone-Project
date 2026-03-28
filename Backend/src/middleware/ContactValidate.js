

const  SendMailValidate = (req, res, next) => {
   
    if(!req.body){
        return res.status(400).json({
            success: false,
            message: "Body missing"
        })
    }

    const {
        name,  email,  message} = req.body;

    if(!name || !email || !message){
        return res.status(400). json({
            success: false,
            message: "All fields  required"
        });
    }
    next();
};

module.exports =  SendMailValidate;


