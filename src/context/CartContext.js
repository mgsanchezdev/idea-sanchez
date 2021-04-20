import React, { createContext, useState } from 'react';
export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex(
      (itemProd) => itemProd.product[0].id === item[0].id
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
    const newCart = cart.filter((element) => element.product[0].id !== itemId);

    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const findItem = cart.find((element) => element.product[0].id === id);
    return findItem ? true : false;
  };

  const cartTotalItem = () => {
    return cart.reduce((acumulador, item) => {
      return acumulador + item.quantityProduct;
    }, 0);
  };

  const cartTotalPrice = () => {
    return cart.reduce((acumulador, item) => {
      return acumulador + item.quantityProduct * item.product[0].price;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        cartTotalItem,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
