import React from 'react';
import AllCardInfo from './AllCardInfo';

const CardData = ({productsData , setCartItems}) => {
    console.log("CardData--->", productsData);
    return (
        <div className='grid grid-cols-3 p-10 gap-3'>
        {
            productsData.map((items) => <AllCardInfo key={items.id} items={items} setCartItems={setCartItems}></AllCardInfo>)
        }

        </div>
    );
};

export default CardData;