

//   updating event controller

const { UpdateEventService } = require("../services/services");  // this is update service

// update controller

const updateEvent = async (req, res) => {
    try{
        const event = await UpdateEventService(req.params.id, req.body);
        res.json({
            success: true, event
        })
    }catch(err){
        res.status(500).json({
            success: false
        });
    }
};

module.exports =  updateEvent;
