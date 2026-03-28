import React from 'react'
import ContactForm from './ContactForm'
import Address from './Address'

const Contacts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6">


  <div className="w-full md:w-1/2">
    <ContactForm />
  </div>


  <div className="w-full md:w-1/2">
    <Address />
  </div>

</div>


   
  )
}

export default Contacts
