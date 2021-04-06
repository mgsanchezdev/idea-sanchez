import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting={'Compra en el mejor E-commerce'} />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer greeting={'Compra en el mejor E-commerce'} />
        </Route>
        <Route exact path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
