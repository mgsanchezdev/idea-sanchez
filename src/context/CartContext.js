import React, { createContext, useState } from 'react';
export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex(
      (itemProd) => itemProd.product.id === item.id
    );

    if (itemIndex === -1) {
      const newCart = [
        ...cart,
        {
          product: item,
          quantityProduct: quantity,
        },
      ];

      setCart(newCart);
    } else {
      const auxCart = [...cart];
      auxCart[itemIndex].quantityProduct += quantity;
      setCart(auxCart);
    }
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((element) => element.product !== itemId);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const findItem = cart.find((element) => element.product.id === id);
    return findItem ? true : false;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
