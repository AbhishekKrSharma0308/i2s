import React from 'react'
import "../styles/Gis.scss"
import icon1 from "../images/gis/icon1.png"
import icon2 from "../images/gis/icon2.png"
import icon3 from "../images/gis/icon3.png"
import icon4 from "../images/gis/icon4.png"
import icon5 from "../images/gis/icon5.png"
import icon6 from "../images/gis/icon6.png"
import icon7 from "../images/gis/icon7.png"
import icon8 from "../images/gis/icon8.png"
const content=[
    {
        id:1,
        img:"",
        head:"Custom App/ WebDevlopment",
        para:"We deliver tailored web and app development (for different platforms) to meet our client’s unique business needs specializing in custom GIS and LBS for retail, logistics, tours & travel. social media & dating, OTT, weather,         ecommerce, payment apps etc.        "
    },  {
        id:2,
        img:"",
        head:"Other Location Based Services",
        para:"We provide comprehensive location-based   services including route optimization, tracking. address marking, geocoding, sitte selection and Pol extraction for tourism, delivery, scenic routes, target marketing etc. "
    },  {
        id:3,
        img:"",
        head:"Navigation App Developement",
        para:"We provide comprehensive location-based   services including route optimization, tracking. address marking, geocoding, sitte selection and Pol extraction for tourism, delivery, scenic routes, target marketing etc.        "
    },  {
        id:4,
        img:"",
        head:"GIS Integration Services",
        para:"We excel in offering expert data manipulation and management solutions for a range of geospatial data types including customer     addresses, sales data, equipment Locations delivery routes etc. "
    },  {
        id:5,
        img:"",
        head:"Spatial Data Capture & Analysis Services",
        para:"We provide comprehensive Spatial Data        Services, from digitization and data conversion to image processing, survey work order posting and data integration, that help organizations drive better business outcomes        "
    },  {
        id:6,
        img:"",
        head:"Geospatial Database Management Services",
        para:"We enable businesses to integrate GIS and geospatial data into existing systems and workflows like CRM. ERP. MIS or loT for better planning and decision making in real time.        "
    },  {
        id:7,
        img:"",
        head:"Geospatial Database Management Services",
        para:"We enable businesses to integrate GIS and geospatial data into existing systems and workflows like CRM. ERP. MIS or loT for better planning and decision making in real time.        "
    }
]
const GisAbout = () => {
  return (
    <div className='GisAbout1'>
        <h1>Our Gis Services Include</h1>
        <p>As a leading GIS company I2S Extendes its Geospatial And It Services to clients arround the Global . we Offer A wide Range of Gis Services to Help You make Informed Decisions by levarging location-Based data.</p>
        <div className='GisAbout2'>
          <div className='GisContainer'>
            <img src={icon1} alt='img'/>
            <h4> GIS Custom App/ WebDevlopment</h4>
            <p>We deliver tailored web and app development (for different platforms) to meet our client’s unique business needs specializing in custom GIS and LBS for retail, logistics, tours & travel. social media & dating, OTT, weather,         ecommerce, payment apps etc.

</p>
 
        </div>
        <div className='GisContainer2'>
            <img src={icon2} alt='img'/>
            <h4>Location Based Services</h4>
            <p>We provide comprehensive location-based   services including route optimization, tracking. address marking, geocoding, sitte selection and Pol extraction for tourism, delivery, scenic routes, target marketing etc.

</p>
 
        </div>
        <div className='GisContainer1'>
            <img src={icon3} alt='img'/>
            <h4>Navigation App Developement</h4>
            <p>We provide comprehensive location-based   services including route optimization, tracking. address marking, geocoding, sitte selection and Pol extraction for tourism, delivery, scenic routes, target marketing etc.
</p>
 
        </div>
        <div className='GisContainer2'>
            <img src={icon4} alt='img'/>
            <h4>GIS Integration Services</h4>
            <p>We enable businesses to integrate GIS and geospatial data into existing systems and workflows like CRM, ERP, MIS or loT for better planning and decision making in real time.</p>
 
        </div>
        <div className='GisContainer1'>
            <img src={icon5} alt='img'/>
            <h4>Geospatial Database Management Services</h4>
            <p>We excel in offering expert data manipulation and management solutions for a range of geospatial data types including customer addresses, sales data, equipment locations. delivery routes etc.</p>
 
        </div>
        <div className='GisContainer'>
            <img src={icon6} alt='img'/>
            <h4>Spatial Data Capture & Analysis Services</h4>
            <p>We provide comprehensive Spatial Data        Services, from digitization and data conversion to image processing, survey work order posting and data integration, that help organizations drive better business outcomes    .
</p>
 
        </div>
        <div className='GisContainer1'>
            <img src={icon7} alt='img'/>
            <h4>Utility and Topography Mapping Services</h4>
            <p>We boast expertise in mapping                 subsurface/overhead utilities and existing topography for efficient planning,            management. and maintenance of utility            infrastructure.
</p>
 
        </div>
        <div className='GisContainer'>
            <img src={icon8} alt='img'/>
            <h4>Maintenance and Support</h4>
            <p>We offer outsourced GIS support. system testing services, and data updating to ensure seamless maintenance and         efficient functioning of your GIS                  infrastructure

</p>
 
        </div>
        </div>
    </div>
  )
}

export default GisAbout