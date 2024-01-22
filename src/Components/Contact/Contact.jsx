import React from 'react';
import {motion } from "framer-motion"
import contact1 from '../images/img3.png';
import contact2 from '../images/img2.png';
import contact3 from '../images/img1.png';
// import Maps from './maps';

const ContactDetails = () => {

  return (
    <>
      <div className="maina">
        <h1>Contact us now</h1>
      </div>
      <div className="mainf">
        <div className="contact-form">
          <p>
            To contact us, simply fill out the form below, and an Intent to Solution representative will connect with you.
          </p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Business Email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Organization" />
          <input type='text' placeholder='Your messeage'/>
          <button type="submit">Send Message</button>
        </div>
        <div className="image-container">
          <img className="image" src={contact1} alt="Image1" />
        <h1>Intent To Solution</h1>
        <p>Intent to Solution is dedicated to leveraging agile practices to drive digital evolution. We are committed to collaborating closely with our clients to shape the businesses of the future. Reach out to us today to discover how we can empower your business to become a leader in your industry.</p>
        </div>
      </div>
      <div className="image-container2">
      <motion.div
        className="image"
  S
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      >
        <img src={contact3} alt="Image 1"  />
      </motion.div>
      <motion.div
        className="image"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
      
      >
        <img src={contact2} alt="Image 2"  />
      </motion.div>
      
    </div>
    <div>
      {/* <Maps/> */}
    </div>
    </>
  );
};

export default ContactDetails;
