import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  const addHandle = () => {
    setCount(count + 1);
  };

  const subtractHandle = () => {
    setCount(count - 1);
  };

  const onAddHandle = () => {
    onAdd(count);
  };
  return (
    <div className="container-count-btn">
      <div className="container-count">
        <Button
          disabled={count <= 0}
          onClick={subtractHandle}
          className="btn btn-danger btn-count"
        >
          -
        </Button>
        <div className="count">{count}</div>
        <Button
          disabled={count >= stock}
          onClick={addHandle}
          className="btn btn-success btn-count"
        >
          +
        </Button>
      </div>
      <Button onClick={onAddHandle} className="btn-carrito">
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
