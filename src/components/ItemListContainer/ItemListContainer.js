import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container-title">
      <h1 className="title">{greeting}</h1>
      <ItemCount stock="10" initial="3" />
    </div>
  );
};

export default ItemListContainer;
