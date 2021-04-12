import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);

  const { addItem } = useContext(CartContext);

  const addHandler = (value) => {
    setCount(value);
  };

  const handleBuy = () => {
    addItem(item[0], count);
  };

  return (
    <div className="container">
      <div className="container-item-detail">
        <img src={item[0]?.url} alt={item[0]?.title} className="img-clothing" />
        <h4>{item[0]?.title}</h4>
        <h5>{item[0]?.price}</h5>
      </div>
      {count === 0 ? (
        <ItemCount stock="10" initial="3" onAdd={addHandler} />
      ) : (
        <Link to="/cart">
          <Button onClick={handleBuy}>Terminar mi compra</Button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
