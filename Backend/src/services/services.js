
// services => in backend services is used for separate logic 
// and it is useful  for  handle database and business 

const  EventModel =  require("../models/Event"); // Event Model call in services from  models 


// for creating  Event Services 

const  CreateEventService = (data) => {
    return EventModel.create(data)
};


// for deleting event services

const DeleteEventService = (id) => {
    return EventModel.findByIdAndDelete(id);
};

 
//   for update Events service

const UpdateEventService =  (id, data) => {
    return EventModel.findByIdAndUpdate(id, data, {new: true});

};

//  for all event services 

const  AllEventService = () => {
    return EventModel.find().sort({ createdAt: -1 });
};


module.exports = {
     
    CreateEventService,
    DeleteEventService,
    UpdateEventService,
    AllEventService

}