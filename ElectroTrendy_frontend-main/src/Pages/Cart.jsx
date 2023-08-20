import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/cartContext';
const Cart = () => {
  const { cart, getCart, addItem, removeItem, removeAllItems, totalPrice } =
    useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);
 
  return (
    <>
      {cart.length > 0 ? (
        <div className="min-h-screen  pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cart?.map((item) => (
                <div
                  key={item._id}
                  className="justify-between mb-6 rounded-lg bg-[#272525] p-6 shadow-md sm:flex sm:justify-start "
                >
                  <img
                    src={item.productId.img}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between ">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-white">
                        {item.productId.name}
                      </h2>
                      <p className="mt-1 text-xs text-white">
                        {item.productId.cat}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={() => removeItem(item.productId._id)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          -
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          value={item.quantity}
                        />
                        <span
                          onClick={() => addItem(item.productId._id)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50  hover:text-black"
                        >
                          +
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm text-white">
                          {item.productId.price}$
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$129.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className>
                  <p className="mb-1 text-lg font-bold">{totalPrice}$</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Link to="/checkout">
                <button className="mt-6 w-full rounded-md bg-[#272525] py-1.5 font-medium text-white  hover:bg-[#b5b188]   hover:text-black">
                  Check out
                </button>
              </Link>
              <button
                onClick={removeAllItems}
                className="mt-6 w-full rounded-md bg-[#272525] py-1.5 font-medium text-white  hover:bg-[#b5b188]   hover:text-black"
              >
                Remove All
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-[12rem] max-h-fit  p-12 my-10 text-center text-red-700">
            Empty <span className="text-[#f2ee1b]">Cart</span>
            <i className="fa-solid fa-trash-can text-red-800 "></i>
          </h1>
        </>
      )}
    </>
  );
};

export default Cart;
