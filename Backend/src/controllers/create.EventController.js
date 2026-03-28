

// create Event  controller

const  { CreateEventService } = require("../services/services");


// create event logic

const CreateEvent = async (req, res) => {
    try{
        const event = await  CreateEventService(req.body);
        res.status(201).json({
            success: true, 
            message: "your Event has been scheduled",
            event
        });

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


module.exports = CreateEvent;
