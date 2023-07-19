import React from 'react';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Styles from './Events.module.css';
import PastEvents from '../components/PastEvents';


function Events() {
  return (
    <>
    <Navbar/>
    <PastEvents />
    <ContactUs/>
    </>
  )
}

export default Events