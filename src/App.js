import './App.css';
import ItemDetailContainer from './components/contanier/ItemDetailContainer';
import ItemListContainer from './components/contanier/ItemListContanier';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    < ItemListContainer />
    <ItemDetailContainer />
    </>
  );
}

export default App;
