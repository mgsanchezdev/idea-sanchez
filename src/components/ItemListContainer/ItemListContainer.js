/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(true);
  const { categoryId } = useParams();
  const arrayItems = new Promise((reject) => {
    setTimeout(() => {
      setFetching(false);
      reject([
        {
          id: 1,
          title: 'Pantalon',
          price: 3000,
          url:
            'https://d3295hraz5fimx.cloudfront.net/18426-product_lg/pantalon-de-hombre-harris.jpg',
          description: 'Pantalon largo',
          category: 'Ropa_Invierno',
        },
        {
          id: 2,
          title: 'Remera',
          price: 8000,
          url:
            'https://dafitistaticar-a.akamaihd.net/p/hgt-2980-6382-1-product.jpg',
          description: 'Manga larga',
          category: 'Ropa_Verano',
        },
        {
          id: 3,
          title: 'Gorra',
          price: 2000,
          url:
            'https://rosario.digital/wp-content/uploads/2020/02/Gorra-Trucker-Infantil-Negra-Negra-Negra.jpg',
          description: 'Gorra negra',
          category: 'Indumentaria',
        },
        {
          id: 4,
          title: 'Buzo',
          price: 9000,
          url:
            'https://d2ye0ltusw47tz.cloudfront.net/104752-thickbox_default/buzo-adidas-originals-3-stripes-hoodie.jpg',
          description: 'Buzo color',
          category: 'Ropa_Invierno',
        },
        {
          id: 5,
          title: 'Zapatillas',
          price: 1000,
          url:
            'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbe13978e/products/NI_CJ1641-100/NI_CJ1641-100-1.JPG',
          description: 'Zapatillas AIR colores',
          category: 'Zapatillas',
        },
        {
          id: 6,
          title: 'Cintos',
          price: 7000,
          url:
            'https://http2.mlstatic.com/D_NQ_NP_813506-MLA26445492557_112017-O.jpg',
          description: 'Cintos negros',
          category: 'Indumentaria',
        },
      ]);
    }, 2000);
  });

  useEffect(() => {
    setFetching(true);
    arrayItems.then((result) => {
      if (categoryId) {
        const filterResult = result.filter((obj) => {
          return obj.category.toLowerCase() === categoryId;
        });
        setItems(filterResult);
      } else {
        setItems(result);
      }
    });
  }, [categoryId]);

  if (fetching) {
    return <Loading />;
  }
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
