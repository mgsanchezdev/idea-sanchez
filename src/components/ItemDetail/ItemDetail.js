import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(0);

  const addHandler = (value) => {
    setCount(value);
  };

  return (
    <div className="container">
      <div className="container-item-detail">
        <img src={item[0]?.url} alt={item[0]?.title} className="img-clothing" />
        <h4>{item[0]?.title}</h4>
        <h5>{item[0]?.price}</h5>
      </div>
      {count === 0 ? (
        <ItemCount stock="10" initial="3" onAdd={addHandler} item={item} />
      ) : (
        <Link to="/cart">
          <Button>Terminar mi compra</Button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
