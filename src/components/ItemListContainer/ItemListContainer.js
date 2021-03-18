import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const arrayItems = new Promise((reject) => {
    setTimeout(() => {
      reject([
        {
          id: 1,
          title: 'Rantalon',
          price: 3000,
          url:
            'https://d3295hraz5fimx.cloudfront.net/18426-product_lg/pantalon-de-hombre-harris.jpg',
          description: 'Pantalon largo',
        },
        {
          id: 2,
          title: 'Remera',
          price: 8000,
          url:
            'https://dafitistaticar-a.akamaihd.net/p/hgt-2980-6382-1-product.jpg',
          description: 'Manga larga',
        },
        {
          id: 3,
          title: 'Gorra',
          price: 2000,
          url:
            'https://rosario.digital/wp-content/uploads/2020/02/Gorra-Trucker-Infantil-Negra-Negra-Negra.jpg',
          description: 'Gorra negra',
        },
        {
          id: 4,
          title: 'Buzo',
          price: 9000,
          url:
            'https://d2ye0ltusw47tz.cloudfront.net/104752-thickbox_default/buzo-adidas-originals-3-stripes-hoodie.jpg',
          description: 'Buzo color',
        },
        {
          id: 5,
          title: 'Zapatillas',
          price: 1000,
          url:
            'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbe13978e/products/NI_CJ1641-100/NI_CJ1641-100-1.JPG',
          description: 'Zapatillas AIR colores',
        },
        {
          id: 6,
          title: 'Cintos',
          price: 7000,
          url:
            'https://http2.mlstatic.com/D_NQ_NP_813506-MLA26445492557_112017-O.jpg',
          description: 'Cintos negros',
        },
      ]);
    }, 2000);
  });

  arrayItems.then((result) => {
    setItems(result);
  });
  return (
    <>
      <h1 className="title">{greeting}</h1>
      <div className="container-title">
        <ItemList items={items} />
        <ItemCount stock="10" initial="3" />
      </div>
    </>
  );
};

export default ItemListContainer;
