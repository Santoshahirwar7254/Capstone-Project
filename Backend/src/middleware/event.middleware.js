//    event middleware 


const  EventValidate = (req, res, next) => {
   
    if (!req.body) {                 //sefety perpose check req.body 
        return res.status(400).json({
            success: false,
            message: "Request body missing"
        });
    }

    const { title, date, time, location, capacity, organizerName, contactEmail } =  req.body;

    if(!title || !date || !time || !location || !capacity || !organizerName  ||!contactEmail){
        return res.status(400).json({
            success:false,
            message: "All fields are required"
        })
    }
    next();

}

module.exports =  EventValidate;