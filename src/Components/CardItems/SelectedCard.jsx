import React from 'react';
import SelectedCardItemsInfo from './SelectedCardItemsInfo';

const SelectedCard = ({cartItems}) => {
    return (
        <div>
            <h1>Selected Items</h1>
            {cartItems.length === 0 ? (
                <p>There are no selected items</p>
            ) : (
                <div className='flex flex-row borde border-solid bg-gray-200 '>
                    {cartItems.map((item, index) => (
                        <SelectedCardItemsInfo key={index} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectedCard;