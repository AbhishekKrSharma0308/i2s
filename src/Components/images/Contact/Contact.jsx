import React from 'react';

import contact1 from '../images/img1.png';
import contact2 from '../images/img2.png';

const ContactDetails = () => {
  return (
    <>
      <div className="maina">
        <h1>Contact Us now</h1>
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
          <textarea placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </div>
        <div className="image-container">
          <img className="image" src={contact1} alt="Image1" />
          <ul>
            <li>Does your business utilize agile practices to evolve digitally?</li>
            <li>
              Intent to Solution is constantly working together with its clients to create the businesses of tomorrow. Get in touch right now and explore how we transform businesses like yours into industry-leading enterprises.
            </li>
          </ul>
        </div>
      </div>
      <div className="image-container">
        <img className="image" src={contact2} alt="Image2" />
      </div>
    </>
  );
};

export default ContactDetails;
