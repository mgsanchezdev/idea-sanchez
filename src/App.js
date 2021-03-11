import ItemListCotainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListCotainer greeting={'Compra en el mejor E-commerce'} />
    </>
  );
}

export default App;
