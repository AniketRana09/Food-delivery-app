import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../Components/ItemList";
import { clearCart } from "../Utils/CartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" m-5 p-5">
      <h1 className="text-center font-semibold text-4xl">Cart</h1>

      <div className=" w-6/12 mx-auto my-6 bg-gray-200 min-h-80 p-6 rounded-lg">
        <button
          onClick={handleClearCart}
          className=" bg-black text-white m-2 p-2 rounded-md"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-center font-semibold">
            {" "}
            Cart is Empty
            <br /> Add Your Food Items
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
