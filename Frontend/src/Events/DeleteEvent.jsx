  //  delete events
import React from 'react'
import axios from "axios";
import { toast } from "react-toastify";

const DeleteEvent = ({ index, events, setEvents }) => {

  const HandleDelete = async () => {
    try {
      const eventId = events[index]._id;   //  get id

      const res = await axios.delete(         ///delte api integration
        `http://localhost:5000/api/delete/${eventId}`
      );

      //  backend response
      if (res.data.success) {
        toast.success(res.data.message || "Event Deleted");

        // remove from UI
        const updated = events.filter((_, i) => i !== index);
        setEvents(updated);

      } else {
        toast.error(res.data.message);
      }

    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  return (
    <div>
      <button
        className='bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition'
        onClick={HandleDelete}
      >
        Delete
      </button>
    </div>
  )
}

export default DeleteEvent;