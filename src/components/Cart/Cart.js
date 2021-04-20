import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import './cart.css';
const Cart = () => {
  const { cart, cartTotalItem, removeItem, clear, cartTotalPrice } = useContext(
    CartContext
  );

  const deleteItem = (id) => {
    removeItem(id);
  };

  const deleteCart = () => {
    clear();
  };

  return (
    <>
      {' '}
      {cartTotalItem() !== 0 ? (
        <div className="container-cart">
          <h1>Carrito de compra</h1>
          <Button
            variant="danger"
            onClick={() => {
              deleteCart();
            }}
          >
            Vaciar del carrito
          </Button>
          <div className="container-clothing">
            {cart.map((item) => {
              return (
                <div key={item.product[0].id}>
                  {' '}
                  <h2>{item.product[0].title}</h2>
                  <img
                    className="img-clothing"
                    src={item.product[0].url}
                    alt={item.product[0].title}
                  />
                  <h2>Cantidad {item.quantityProduct}</h2>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteItem(item.product[0].id);
                    }}
                  >
                    Eliminar del carrito
                  </Button>
                </div>
              );
            })}
          </div>
          <h2 className="cartTotalPrice">
            Monto total de la compra:${cartTotalPrice()}
          </h2>
        </div>
      ) : (
        <div className="messageCart">
          <h1>No hay items en el carrito</h1>
          <Link to="/">
            {' '}
            <Button>Ir a Home</Button>{' '}
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
