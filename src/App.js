import React from 'react'
import Header from './Components/Header'
import "./App.css";
import Crousel from './Components/Crousel';
import Card from './Components/Card';
import Image from './Components/Image';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import Display from './Components/Display';
// import imagesection from './Components/imagesection';


// import Mobileheader from './Components/Mobileheader'
const App = () => {
  return (
    <div className='background'>
    <Header/>
    <Crousel/>
    <Card/>
    <Image/>
    <Display/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default App