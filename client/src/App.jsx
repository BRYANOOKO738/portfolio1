import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Aboutme from './Components/Aboutme/Aboutme';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';


function App() {
  

  return (
    <>
      <div  className='dark'>
      <Navbar />
        <Profile />        
      </div>
      <Aboutme />
      <Projects/>
      <Testimonial />
      <Contact/>
    </>
  );
}

export default App
