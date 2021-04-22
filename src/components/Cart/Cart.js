/* eslint-disable no-unused-expressions */
import React, { useContext, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { Button, Form } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import {messageAlert} from '../../utils/alerts';
import "./cart.css";

const Cart = () => {
  const history = useHistory();
  const { cart, cartTotalItem, removeItem, clear, cartTotalPrice } = useContext(
    CartContext
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [idOrden, setIdOrden] = useState(null);
  const[isForm,setIsForm]= useState(false);

  const deleteItem = (id) => {
    removeItem(id);
  };

  const deleteCart = () => {
    clear();
  };

  const guardarOrdenDeCompra = (e) => {
    e.preventDefault();
    const comprador = { name, phone, email };
    const db = getFirestore();

    const ordersCollection = db.collection("orders");
    const newDate = firebase.firestore.Timestamp.fromDate(new Date());

    const items = cart.map((item) => {
      return {
        id: item.product[0].id,
        title: item.product[0].title,
        price: item.product[0].price,
      };
    });

    const totalPrice = cartTotalPrice();

    ordersCollection
      .add({ buyer: comprador, items, newDate, total: totalPrice })
      .then((doc) => {
        setIdOrden(doc.id);
      });

      clear();
      
  };

  idOrden && messageAlert("success",`Orden generada: ${idOrden}`);
  
  return (
    <>
      
      {cartTotalItem() !== 0 ? (
        <div className="container-cart">
          <h1>Carrito de compra</h1>
          <Button
            variant="danger"
            onClick={() => {
              deleteCart();
            }}
          >
            Vaciar del carrito
          </Button>
          <div className="container-clothing">
            {cart.map((item) => {
              return (
                <div key={item.product[0].id}>
                  {" "}
                  <h2>{item.product[0].title}</h2>
                  <img
                    className="img-clothing"
                    src={item.product[0].url}
                    alt={item.product[0].title}
                  />
                  <h2>Cantidad {item.quantityProduct}</h2>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteItem(item.product[0].id);
                    }}
                  >
                    Eliminar del carrito
                  </Button>
                </div>
              );
            })}
          </div>
          <h2 className="cartTotalPrice">
            Monto total de la compra:${cartTotalPrice()}
          </h2>
          <Button onClick = {()=>{setIsForm(true)}}>Finalizar compra</Button>

          {isForm && <Form>
            <Form.Group controlId="formBasicname">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre y apellido"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicphone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teléfono"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              onClick={(e) => {
                guardarOrdenDeCompra(e);
              }}
            >
              Generar orden
            </Button>
          </Form>}
        </div>
      ) : (
        <div className="messageCart">
          <h1>No hay items en el carrito</h1>
          <Link to="/">
            {" "}
            <Button>Ir a Home</Button>{" "}
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
