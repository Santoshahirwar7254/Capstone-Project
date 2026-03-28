//delete service from services.js
const {  DeleteEventService } = require("../services/services");



// Delete Event  controller

const deleteEvent = async (req, res) => {
    try{
        await  DeleteEventService(req.params.id);
        res.json({
            sucess: true, 
            message: "Event Deleted"
        });
    }catch(err){
        res.status(500).json({
            success: false
        })
    };
};

module.exports =  deleteEvent;












