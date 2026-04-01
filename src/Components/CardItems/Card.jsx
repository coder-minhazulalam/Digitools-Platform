import React, { use, useState } from 'react';
import Banner from '../BannerSection/Banner';
import CardData from './CardData';
import SelectedCard from './SelectedCard';

const Card = ({ productsPromise }) => {

    // Toggle state | products - cart view
    const[available, setAvailable] = useState(true)
    
    // Cart items state
    const [cartItems, setCartItems] = useState([])

    const products = use(productsPromise);
    const productsData = products.products;


    return (
        <div>
      
                <div className='text-center mt-30'>
                <h1 className='text-3xl font-bold text-gray-800'>Premium Digital Tools</h1>
                <p className='text-gray-600 mt-4'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            </div>

       <div className='flex justify-center mb-10 mt-5 '>
        <button onClick={()=> setAvailable(true)} 
        className={`px-5 py-2 rounded-l-3xl ${available ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-gray-300 text-gray-600'}`}
        >Products</button>
        <button onClick={()=> setAvailable(false)} 
        className={`px-5 py-2 rounded-r-3xl ${!available ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-gray-300 text-gray-600'}`}
                >Carts({cartItems.length})</button>
       </div>
           
        {
            available ? 
            <CardData productsData={productsData} setCartItems={setCartItems}/> : 
            <SelectedCard cartItems={cartItems}  />
            
        }

 


        </div>
    );
};

export default Card;