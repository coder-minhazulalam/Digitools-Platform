import React from 'react';
import { toast } from 'react-toastify';

const SelectedCardItemsInfo = ({ item, cartItems, setCartItems }) => {

    const removeCart = () => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCartItems);

        toast.info('Item removed from cart!', {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <div className='flex flex-row m-5 p-5 rounded-lg bg-white items-center'>

            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-2xl">
                {item.icon}
            </div>

            <div className='ml-5 flex flex-col gap-1'>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-sm">${item.price}</p>
            </div>

            <button
                onClick={removeCart}
                className="h-[50px] w-[100px] rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white ml-auto"
            >
                Remove
            </button>

        </div>
    );
};

export default SelectedCardItemsInfo;