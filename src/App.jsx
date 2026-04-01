import './App.css'
import React, { Suspense } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/BannerSection/Banner';
import Card from './Components/CardItems/Card';
import { ToastContainer } from 'react-toastify';
import StepForAccount from './Components/Footer/StepForAccount';

const productsPromise = fetch('Products.json').then(response => response.json())

const App = () => {
  return (
    <>
    
    {/*------ Navbar ------ */}
     <Navbar/>
     {/*------ Banner ------ */}
     {/* <Banner/> */}
     <Banner/>  
     {/* Card */}
    <Suspense>
    <Card productsPromise={productsPromise} />
  </Suspense>

   <ToastContainer />

    <StepForAccount/>

    </>
  );
};

export default App;