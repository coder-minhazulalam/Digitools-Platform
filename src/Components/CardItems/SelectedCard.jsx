import React from "react";
import SelectedCardItemsInfo from "./SelectedCardItemsInfo";
import { ShoppingCart } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

const SelectedCard = ({ cartItems, setCartItems }) => {

  const removeAll = () => {
    toast.success("All items removed from the cart!", {
      position: "top-right",
      autoClose: 3000,
    });

    setCartItems([]);
  };

  return (
    <div className="flex flex-col m-5">

      <ToastContainer /> 

      <h1 className="font-bold text-[40px] m-10">Your Products</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center m-5 p-5 rounded-lg bg-gray-200 py-10 gap-5">
            <ShoppingCart size={50} className="text-gray-500" />
          <h1 className="text-[30px] font-bold">
            There are no selected items
          </h1>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-2 bg-gray-200 mx-10 rounded-lg">
            {cartItems.map((item, index) => (
              <SelectedCardItemsInfo key={index} item={item} cartItems={cartItems} setCartItems={setCartItems} />
            ))}
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center mx-10 mt-5">
              <h1 className="font-bold text-[30px]">
                Total Price:
              </h1>
              <h1 className="font-bold text-[30px]">
                ${cartItems.reduce((total, item) => total + item.price, 0)}
              </h1>
            </div>

            <button
              onClick={removeAll}
              className="h-[50px] mx-10 mt-5 rounded-3xl bg-gradient-to-r from-red-500 to-pink-500 text-white"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default SelectedCard;
