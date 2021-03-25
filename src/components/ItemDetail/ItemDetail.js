import React from 'react';
import './ItemDetail.css';
const ItemDetail = ({ item }) => {
  console.log('Item', item);
  return (
    <div className="container-item-detail">
      <img src={item.url} alt={item.title} className="img-clothing" />
      <h4>{item.title}</h4>
      <h5>{item.price}</h5>
    </div>
  );
};

export default ItemDetail;
