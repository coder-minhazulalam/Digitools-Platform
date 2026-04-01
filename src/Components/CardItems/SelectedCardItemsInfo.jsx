import React from 'react';

const SelectedCardItemsInfo = ({item , cartItems, setCartItems }) => {

     const removeCart = (item) => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
    }



    return (
        <>

         <div className='flex flex-row m-5 p-5  rounded-lg bg-white items-center '>

                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-2xl mb-4">
                {item.icon}
            </div>

            <div className='ml-5 flex flex-col gap-2'>
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-500 text-sm mb-4">
                    ${item.price}
                </p>
            </div>

            <button onClick={() => removeCart(item) }
        className={`h-[50px] w-[100px] rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white ml-auto `} >
            Remove
        </button>
       
    
        </div>


        </>
    );
       
};

export default SelectedCardItemsInfo;