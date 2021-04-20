/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getFirestore } from '../../firebase';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [fetching, setFetching] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setFetching(true);
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    const item = itemsCollection.doc(itemId);
    item.get().then((res) => {
      if (res.exists) {
        setItem([{ id: res.id, ...res.data() }]);
        setFetching(false);
      }
    });
    return;
  }, [itemId]);

  if (fetching) {
    return <Loading />;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
