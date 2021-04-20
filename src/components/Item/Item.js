import React from 'react';
import './Item.css';
const Item = ({ item }) => {
  return (
    <div className="container-item">
      <img src={item[0].url} alt={item[0].title} className="img-clothing" />
      <h4>{item[0].title}</h4>
      <h5>{item[0].price}</h5>
      <h5>{item[0].category}</h5>
    </div>
  );
};

export default Item;
