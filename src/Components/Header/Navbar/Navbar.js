import React, { useState } from 'react';

import Logo from "../../images/logo_2.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setCurrentMenu(null);
  };

  const handleMenuItemClick = (menuItem) => {
    setCurrentMenu(menuItem);
  };

  return (
    <div className="navbar">
      <div className='logo'>
        <img src={Logo} alt='logo'/>
      </div>
      <div className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        Menu
      </div>
      <div className={`menu-page ${menuOpen ? 'open' : ''}`}>
      <div className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        Back
      </div>
        <ul>
        <li ><a href="/">Home</a></li>
          <li onClick={() => handleMenuItemClick('About1')}><a href="/about">About</a></li>
          <li onClick={() => handleMenuItemClick('Service1')}><a href="/service">Service</a></li>
          <li onClick={() => handleMenuItemClick('Blog')}><a href='/blog'>Blog</a></li>
          <li onClick={() => handleMenuItemClick('Team1')}><a href='/our_team'>Our Team</a></li>
          <li onClick={() => handleMenuItemClick('Contact1')}><a href='/contact'>Contact</a></li>
        </ul>
        {currentMenu === 'About' && (
          <ul>
            <li ><a href="/about">About us</a></li>
            <li><a href="/whyus">Why us</a></li>
            <li ><a href="/quality">Our Quality Mangement</a></li>
            <li ><a href="/itinfra">It infrasture</a></li>
          </ul>
        )}
      
         {currentMenu === 'Service' && (
          <ul>
            <li onClick={() => handleMenuItemClick('gif devlopment')}>Gis Devlopment</li>
            <li onClick={() => handleMenuItemClick('software')}>Software</li>
            <li onClick={() => handleMenuItemClick('Survey')}>Survey</li>
            <li onClick={() => handleMenuItemClick('Consultancy')}>Consultancy Provide</li>
          </ul>
        )}
        {currentMenu === 'gif devlopment' && (
          <ul>
            <li><a href="/big_canvas">Big Canvas related gis</a></li>
            <li><a href="/gis_devlopment">Gis Service</a></li>
            <li><a href="/live_project">Live Project</a></li>
          
            
          </ul>
        )}
          {currentMenu === 'software' && (
          <ul>
            <li onClick={() => handleMenuItemClick('full stack')} >Full stack</li>
            <li><a href="/quality_engineering">Quality Engineering</a></li>
            <li><a href="/c_cloud">C cloud & devlopment</a></li>
            <li><a href="/e-commerce">E-commerce</a></li>
            <li><a href="/framework">Framework</a></li>
            <li><a href="/graphic">Graphic Design </a></li>
          
            
          </ul>
        )}
          {currentMenu === 'full stack' && (
          <ul>
         
            <li><a href="/website_devlopment">Quality Engineering</a></li>
            <li><a href="/software_devlopment">App devlopment/Softwaredevlopment</a></li>
    
          </ul>
        )}
        {currentMenu === 'Survey' && (
          <ul>
          <li><a href="/dgps_survey">DGPS Survey</a></li>
          <li><a href="/drone_survey">Drone Survey</a></li>
          <li><a href="/lidar_survey">Lidar Servey</a></li>
          <li><a href="/d2d_survey">Door To Door Survey</a></li>
            
          </ul>
        )}
        {currentMenu === 'Consultancy' && (
          <ul>
            <li><a href="/manpowersupply">Man Power Supply</a></li>
            <li><a href="/gis_training">Gis Training</a></li>
            <li><a href="/product_provider">product provider</a></li>
            <li><a href="/mobile_app">Mobile App</a></li>
            
          </ul>
        )}
        {currentMenu === 'Technology' && (
          <ul>
            <li><a href="/gis_software">Gis Software</a></li>
            <li><a href="/it_infra">It infrasture</a></li>
            
          </ul>
        )}
    
      </div>
      <div className="home">
      <ul>
        <li ><a href="/">Home</a></li>
          <li onClick={() => handleMenuItemClick('About1')}><a href="/about">About</a></li>
          <li onClick={() => handleMenuItemClick('Service1')}><a href="/service">Service</a></li>
          <li onClick={() => handleMenuItemClick('Blog')}><a href='/blog'>Blog</a></li>
          <li onClick={() => handleMenuItemClick('Team1')}><a href='/our_team'>Our Team</a></li>
          <li onClick={() => handleMenuItemClick('Contact1')}><a href='/contact'>Contact</a></li>
        </ul>
        {currentMenu === 'About' && (
          <ul>
            <li ><a href="/about">About us</a></li>
            <li><a href="/whyus">Why us</a></li>
            <li ><a href="/quality">Our Quality Mangement</a></li>
            <li ><a href="/itinfra">It infrasture</a></li>
          </ul>
        )}
      
         {currentMenu === 'Service' && (
          <ul>
            <li onClick={() => handleMenuItemClick('gif devlopment')}>Gis Devlopment</li>
            <li onClick={() => handleMenuItemClick('software')}>Software</li>
            <li onClick={() => handleMenuItemClick('Survey')}>Survey</li>
            <li onClick={() => handleMenuItemClick('Consultancy')}>Consultancy Provide</li>
          </ul>
        )}
        {currentMenu === 'gif devlopment' && (
          <ul>
            <li><a href="/big_canvas">Big Canvas related gis</a></li>
            <li><a href="/gis_devlopment">Gis Service</a></li>
            <li><a href="/live_project">Live Project</a></li>
          
            
          </ul>
        )}
          {currentMenu === 'software' && (
          <ul>
            <li onClick={() => handleMenuItemClick('full stack')} >Full stack</li>
            <li><a href="/quality_engineering">Quality Engineering</a></li>
            <li><a href="/c_cloud">C cloud & devlopment</a></li>
            <li><a href="/e-commerce">E-commerce</a></li>
            <li><a href="/framework">Framework</a></li>
            <li><a href="/graphic">Graphic Design </a></li>
          
            
          </ul>
        )}
          {currentMenu === 'full stack' && (
          <ul>
         
            <li><a href="/website_devlopment">Quality Engineering</a></li>
            <li><a href="/software_devlopment">App devlopment/Softwaredevlopment</a></li>
    
          </ul>
        )}
        {currentMenu === 'Survey' && (
          <ul>
          <li><a href="/dgps_survey">DGPS Survey</a></li>
          <li><a href="/drone_survey">Drone Survey</a></li>
          <li><a href="/lidar_survey">Lidar Servey</a></li>
          <li><a href="/d2d_survey">Door To Door Survey</a></li>
            
          </ul>
        )}
       {currentMenu === 'Consultancy' && (
          <ul>
            <li><a href="/manpowersupply">Man Power Supply</a></li>
            <li><a href="/gis_training">Gis Training</a></li>
            <li><a href="/product_provider">product provider</a></li>
            <li><a href="/mobile_app">Mobile App</a></li>
            
          </ul>
        )}
        {currentMenu === 'Technology' && (
          <ul>
            <li><a href="/gis_software">Gis Software</a></li>
            <li><a href="/it_infra">It infrasture</a></li>
            
          </ul>
        )}
         {currentMenu === 'Team' && (
          <ul>
            <li><a href="/Our_Team">Our Team</a></li>
           
            
          </ul>
        )}
        
    
    
      </div>
    </div>
  );
}

export default Navbar;
