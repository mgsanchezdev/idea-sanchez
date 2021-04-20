import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';
const ItemList = ({ items = [] }) => {
  return (
    <div className="container-clothing">
      {items.map((item) => (
        <Link key={item[0].id} to={`/item/${item[0].id}`}>
          <Item key={item[0].id} item={item} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
