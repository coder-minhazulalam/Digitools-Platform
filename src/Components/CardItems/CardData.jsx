import React from 'react';
import AllCardInfo from './AllCardInfo';

const CardData = ({productsData , cartItems, setCartItems}) => {
    console.log("CardData--->", productsData);
    return (
        <div className='grid grid-cols-3 p-10 gap-3'>
        {
            productsData.map((items) => <AllCardInfo key={items.id} items={items} cartItems={cartItems} setCartItems={setCartItems}></AllCardInfo>)
        }

        </div>
    );
};

export default CardData;