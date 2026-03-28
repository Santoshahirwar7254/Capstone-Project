// Event managament requirements

const mongoose = require("mongoose");

const Schemas = mongoose.Schema;

const EventSchema =  new Schemas({

    title:{                  //Event title like collage function, merriage kitty party
        type: String, 
        required: [true, "Title required"],
        trim: true
    },
    description:{    //Event  Decription in brief
        type: String,
        required: true
    },
    date: {             ///Event Date like Which Dates Event will schudle
        type: Date,
        required:true
    },
    time: {   ///event time  
        type: String,
        required: true
      },
    location:{        //Event Loaction
        type:String,
        required: true
    },
    price:{       // Event budget
        type: Number,
        default: 0
    },
    category: {       //which  category choose by customer
        type: String,
        enum: ["Music", "Tech", "Wedding", "Seminar", "other"],
        default:"other"
    },
    capacity: {    /// how much  capacity of guests
        type: Number,
        required: true
    },
    organizerName: {    //organizer name  
        type: String,
        required: true
    },
    contactEmail: {    //organizer contact mail
        type: String,
        required: true
    }
   
   
   
}, { timestamps: true })

const EventModel =  mongoose.model('Event', EventSchema);

module.exports = EventModel;
