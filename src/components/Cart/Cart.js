import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';
const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container-cart">
      <h1>Carrito de compra</h1>
      <div className="container-clothing">
        {cart.map((item) => {
          return (
            <div key={item.product.id}>
              {' '}
              <h2>{item.product.title}</h2>
              <img
                className="img-clothing"
                src={item.product.url}
                alt={item.product.title}
              />
              <h2>Cantidad {item.quantityProduct}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
