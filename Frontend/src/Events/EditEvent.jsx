import React, { useState } from 'react'
import EditEventModal from './EditEventModal'

const EditEvent = ({ index, events, setEvents }) => {

  const [open, setOpen] = useState(false);

  const handleUpdateUI = (updatedData) => {
    const updated = [...events];
    updated[index] = { ...updated[index], ...updatedData };
    setEvents(updated);
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className='bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600'
      >
        Edit
      </button>

      {open && (
        <EditEventModal
          close={() => setOpen(false)}
          eventData={events[index]}   //  event pass
          onUpdate={handleUpdateUI}
        />
      )}
    </div>
  )
}

export default EditEvent;