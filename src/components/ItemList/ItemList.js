import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';
const ItemList = ({ items = [] }) => {
  return (
    <div className="container-clothing">
      {items.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <Item key={item.id} item={item} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
