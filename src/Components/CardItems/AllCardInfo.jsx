import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AllCardInfo = ({items, setCartItems}) => {
    
  // check Sate -> click / not click ...............
    const [ clicked , setClicked ] = useState(false)

    const handleAddToCart = () => {
        setCartItems(prev => [...prev, items])

        // Show toast notification for adding to cart........
        toast.success(`${items.name} added to cart!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };


    return (
          <div className="p-10 h-full w-full   mx-auto  rounded-2xl shadow-xl  bg-white relative">

      {/* Tag */}
      <span className="absolute top-3 right-3 text-xs bg-amber-100 text-amber-600 px-3 py-1 rounded-full">
        {items.tag}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-2xl mb-4">
        {items.icon}
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2">{items.name}</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-4">
        {items.description}
      </p>

      {/* Price */}
      <h3 className="text-xl font-bold mb-4">
        ${items.price}
        <span className="text-sm text-gray-500 font-normal">
          /{items.period}
        </span>
      </h3>

      {/* Features */}
      <ul className="space-y-2 mb-5">
        {items.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-[15px] text-gray-600">
            <span className="text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button 
        className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition"
        onClick={() => {
          handleAddToCart();
          setClicked(true);
        }}
      >
        { clicked ? "Added to Cart" : "Buy Now" }
        <ToastContainer/>
      </button>
    </div>
    );
};

export default AllCardInfo;