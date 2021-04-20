import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { CartContext } from '../../context/CartContext';
import './cartWidget.css';

const CartWidget = () => {
  const { cartTotalItem } = useContext(CartContext);

  return (
    <div className="containerCart">
      <Link to="/cart">
        <BiCart className="iconCart containerCart" />{' '}
      </Link>
      {cartTotalItem() !== 0 && (
        <div className="CantCart">{cartTotalItem()}</div>
      )}{' '}
    </div>
  );
};

export default CartWidget;
