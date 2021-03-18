import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
const ItemList = ({ items = [] }) => {
  return (
    <div className="container-clothing">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
