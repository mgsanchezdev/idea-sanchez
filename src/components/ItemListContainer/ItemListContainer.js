/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getFirestore } from '../../firebase';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setFetching(true);
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    if (categoryId) {
      const arrayItemsCategory = itemsCollection.where(
        'category',
        '==',
        categoryId
      );
      setFetching(false);
      arrayItemsCategory.get().then((querySnapshop) => {
        if (querySnapshop.size === 0) {
          <h2>No hay elemetos</h2>;
        } else {
          setItems(
            querySnapshop.docs.map((doc) => [{ id: doc.id, ...doc.data() }])
          );
        }
      });
    } else {
      const arrayItems = itemsCollection.get();
      arrayItems.then((snapshot) => {
        if (snapshot.size > 0) {
          setItems(snapshot.docs.map((doc) => [{ id: doc.id, ...doc.data() }]));

          setFetching(false);
        }
      });
    }
  }, [categoryId]);

  if (fetching) {
    return <Loading />;
  }
  return (
    <>
      <h1 className="title">{greeting}</h1>

      <div className="container-title">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
