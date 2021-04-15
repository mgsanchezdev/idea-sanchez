import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { CartContext } from '../../context/CartContext';
import './cartWidget.css';

const CartWidget = () => {
  const { cartTotalItem } = useContext(CartContext);

  return (
    <>
      {cartTotalItem() !== 0 && (
        <div className="containerCart">
          <Link to="/cart">
            <BiCart className="iconCart" />{' '}
          </Link>
          <div className="CantCart">{cartTotalItem()}</div>
        </div>
      )}{' '}
    </>
  );
};

export default CartWidget;
