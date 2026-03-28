import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Buttons from './Buttons/Buttons'
import Events from './Events/Events'
import Testaminal from './Testaminals/Testaminal'
import Footer from './components/Footer/Footer'
import Contacts from './Contact/Contacts'
import Gallery from './Gallery/Gallery'
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div>
      {/* toast container */}
       <ToastContainer 
         position="top-right"
         autoClose={3000}
         theme="dark"
      />
         {/*  */}
         <Navbar/>       {/*  Navbar component Design + Logo  features  */}
          <Buttons/>         {/*  Buttons Login & Signup buttons  features */}
            <Events/>                   {/*  Event create update delete & all Events  features */}
            <Gallery/>                         {/*   gallery  all events image and memories features */}
            <Testaminal />                   {/*  testaminals  our  man power features */}
                <Contacts/>                  {/*   contacts  contact us feature   */}
                    <Footer/>                   {/*  footer normal signup login about events & social meadia  features */}
    </div>
  )
}

export default App
