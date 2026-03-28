//  get all events 
import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import EditEvent from "./EditEvent";
import DeleteEvent from "./DeleteEvent";

const ViewEvents = ({ close }) => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);   
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const fetchEvents = async () => {
    try {
      setLoading(true);  // start loading

      const res = await axios.get(    //////get all events api integration
        "https://capstone-project-x3g1.onrender.com/api/allevents"
      );

      if (res.data.success) {
        setEvents(res.data.events);
      } else {
        toast.error(res.data.message);
      }

    } catch (err) {
      console.log(err)
      toast.error("Failed to fetch events ");
    } finally {
      setLoading(false);  // stop loading
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((e) =>
    (e.title || "").toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className='fixed inset-0 bg-black/70 flex justify-center items-center p-4'>
      
      <div className='bg-gray-900 w-full max-w-4xl p-5 rounded-xl max-h-[90vh] overflow-y-auto'>
        
        {/* HEADER */}
        <div className='flex justify-between mb-4'>
          <h1 className='text-white text-xl'>All Events</h1>
          <button className='text-white' onClick={close}>
            <IoClose />
          </button>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white outline-none"
        />

        {/*  LOADING UI */}
        {loading ? (
          <div className="text-center text-gray-400 mt-10 animate-pulse">
            Loading events...
          </div>
        ) : currentEvents.length === 0 ? (
          <p className="text-gray-400 text-center">No Events Found</p>
        ) : (
          currentEvents.map((event, index) => (
            <div key={event._id} className='bg-gray-800 p-4 rounded-lg mt-4 text-white'>
              
              <h2 className='font-bold text-lg'>{event.title}</h2>

              <p className="text-sm text-gray-300 mt-1">Description-  
                  {event.description}
              </p>

              {/*  OPTIMIZED GRID (mobile friendly) */}
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mt-2">
                <p>Location- {event.location}</p>
                <p>Date-  {new Date(event.date).toLocaleDateString()}</p>
                <p>Time- {event.time}</p>
                <p>Price- ₹{event.price}</p>
                <p>Capacity- {event.capacity}</p>
                <p>Category- {event.category}</p>
              </div>

              <div className="text-sm text-gray-400 mt-2">
                <p>Organizer- {event.organizerName}</p>
                <p>Email- {event.contactEmail}</p>
              </div>

              <div className='flex justify-between mt-3'>
                <EditEvent
                  index={startIndex + index}
                  events={events}
                  setEvents={setEvents}
                />
                <DeleteEvent 
                  index={startIndex + index}
                  events={events}
                  setEvents={setEvents}
                />
              </div>

            </div>
          ))
        )}

        {/* PAGINATION */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-3">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="bg-gray-700 px-3 py-1 rounded disabled:opacity-40"
            >
              Prev
            </button>

            <span className="text-white">
              {currentPage} / {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="bg-gray-700 px-3 py-1 rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default ViewEvents;