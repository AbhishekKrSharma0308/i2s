import React from 'react';
import { CDBModalFooter, a, CDBBtn, CDBIcon,CDBBox } from 'cdbreact';
import logo from "../images/logo.png"
import instagram from "../images/2.png"
import Linkdein from "../images/1.png"


export const Footer = () => {
  return (
    <CDBModalFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="80px" height="80px" />
              <span className="ms-3 h5 font-weight-bold">I2S</span>
            </a>
            <p>
             
              <span className="ms-3 h5 font-weight-bold">Intent To Solution</span>
              </p>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2 mx-2">
              <a target='_blank'><CDBIcon fab icon="facebook-f" /></a>
                
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-2 p-2">
              <a  target='_blank'><CDBIcon fab icon="twitter" /></a>
                
              </CDBBtn>
            
              <CDBBtn flat color="dark" className="p-2 mx-2">
                <a href='https://in.linkedin.com/company/i-2-s ' target='_blank' > <img src={instagram} alt='linkdein' width="20px" height="20px"/></a>
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2 mx-2 " >
              <a href='https://www.instagram.com/intent_to_solutioni2s/' target='_blank'><img src={Linkdein} alt='linkdein' width="20px" height="20px"/> </a>
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              I2S
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' } }>
              
              <a href="/about">About Us</a>
              <a href="/blog">Blog</a>
          
              
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
             Service
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <a href="/Gis">Gis Platform</a>
              <a href="/Software">Software Devlopment</a>
              <a href="/sURVEY">Survey Devlopment</a>
              <a href="/cONSULTANCY">Consultancy provider</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
            <a href="/our_team">Our Team</a>
            <a href="/contact">Contact</a>
      
           
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; I2S, 2023. All rights reserved.</small>
      </CDBBox>
    </CDBModalFooter>
  );
};
export default Footer