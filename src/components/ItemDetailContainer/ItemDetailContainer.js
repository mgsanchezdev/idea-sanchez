import React, { useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const getItems = new Promise((reject) => {
    setTimeout(() => {
      reject({
        id: 1,
        title: 'Rantalon',
        price: 3000,
        url:
          'https://d3295hraz5fimx.cloudfront.net/18426-product_lg/pantalon-de-hombre-harris.jpg',
        description: 'Pantalon largo',
      });
    }, 2000);
  });

  getItems.then((result) => {
    setItem(result);
  });

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
