import './App.css'
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/BannerSection/Banner';

const App = () => {
  return (
    <>
    {/*------ Navbar ------ */}
     <Navbar/>
     {/*------ Banner ------ */}
     {/* <Banner/> */}
     <Banner/>  
    </>
  );
};

export default App;