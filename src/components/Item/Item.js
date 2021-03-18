import React from 'react';
import './Item.css';
const Item = ({ item }) => {
  return (
    <div className="container-item">
      <img src={item.url} alt={item.title} className="img-clothing" />
      <h4>{item.title}</h4>
      <h5>{item.price}</h5>
    </div>
  );
};

export default Item;
