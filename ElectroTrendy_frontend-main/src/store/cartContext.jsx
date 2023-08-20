import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();
export default CartContext;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //get user object from local storage

  const customerId = sessionStorage.getItem('currentUserId');

  const getCart = async () => {
    try {
      axios
        .get(`http://127.0.0.1:7000/api/v1/cart/${customerId}`)
        .then(({ data }) => {
          setCart(data.cart.productList);
        });
    } catch (err) {
      console.log(err);
    }
  };

  //add  to the cart
  const addItem = async (productId) => {
    // console.log(productId);
    try {
      // if (!currentUserId) return navigate('/signIn');
      const { data } = await axios.post(
        `http://127.0.0.1:7000/api/v1/cart/addItem/${customerId}`,
        {
          productId,
        }
      );

      setCart(data.productList);
    } catch (err) {
      console.log(err);
    }
  };
  const removeItem = async (productId) => {
    const { data } = await axios.patch(
      `http://127.0.0.1:7000/api/v1/cart/removeItem/${customerId}`,
      {
        productId,
      }
    );
    setCart(data.productList);
  };

  const removeAllItems = async () => {
    await axios.patch(
      `http://127.0.0.1:7000/api/v1/cart/removeAllItems/${customerId}`
    );
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, current) => {
    return current.productId.price * current.quantity + acc;
  }, 0);

  //share all function using context
  const value = {
    addItem,
    removeItem,
    cart,
    removeAllItems,
    getCart,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
