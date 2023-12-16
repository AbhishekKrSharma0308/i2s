import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
//componenet
import Header from './Components/Header/Navbar/Navbar';
import Footer from './Components/Header/Footer';
import Home from './Components/Header/Header/Home';
import About from './Components/about/about/About';
import Vlog from './Components/Vlog/Vlog.js'
import Contact from "./Components/Contact/Contact"
import Maps from "./Components/Contact/maps"
import Team from './Components/Main/header/our team/Team';
import Test from './Test'
import PageNotFound from './PageNotFound.jsx'
import BlogPost from './Components/Vlog/components/main/BlogDetail.js';


//style
import './App.css';
import "./Components/styles/Aboutm.scss"
import "./Components/styles/Carousel.css"
import "./Components/styles/Carousel2.css"
import "./Components/styles/Clickart.css"
import "./Components/styles/Director.css"
import "./Components/styles/header.css"
import "./Components/styles/hello.css"
import "./Components/styles/ImageText.css"
import "./Components/styles/Navbar.css"
import "./Components/styles/Team.css"
import "./Components/styles/Contact.scss"
import "./Components/styles/NotFound.scss"
import "./Components/styles/whygis.scss"


import "./Components/styles/Gis.scss"
import "./Components/styles/domains.scss"

import Whygis from './Components/about/about/Whygis';
import Service from './Components/Gis/Service';




function App() {
  return (
    <div className='App'>
<Router>

  <Header/>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/about#/domain" element={<Whygis/>}/>
      <Route path="/our_team" element={<Team/>}/>
      <Route path="/blog" element={<Vlog/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={ <Contact/>}/>
      <Route path="/blog/:blogId" element={<BlogPost />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<PageNotFound />} />
     
 
  </Routes>
  
  <Footer/>
</Router>
</div>
  );
}

export default App;
