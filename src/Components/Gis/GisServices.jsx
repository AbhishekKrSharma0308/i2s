import React from 'react'
import Box1 from "../images/gis/box1.jpg"
import Box2 from "../images/gis/box2.png"

const GisServices = () => {
  return (
    <div className='GisServices1'>
        <div > <h3>Associated Service Include</h3>
        <p>Associated services often play a crucial role in enhancing the functionality and value of a product or platform. These services complement the core offering by providing additional features or capabilities that cater to specific needs. Whether it's cloud-based storage, security solutions, customer support, or third-party integrations, associated services can significantly enrich the user experience. </p>
       </div>
       <div className='GisServices'><div> <img src={Box1}/></div>
        <div> <img src={Box2}/></div>
        </div>
         
    </div>
  )
}

export default GisServices