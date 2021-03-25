import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Compra en el mejor E-commerce'} />
      <h2 style={{ textAlign: 'center' }}>Detalle del producto</h2>
      <ItemDetailContainer />
    </>
  );
}

export default App;
