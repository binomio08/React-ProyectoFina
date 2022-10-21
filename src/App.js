import './App.css';
import ItemDetailContainer from './components/contanier/ItemDetailContainer';
import ItemListContainer from './components/contanier/ItemListContanier';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/context/CartContext';
function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemDetailContainer />} />
        <Route path='/:categoryName' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
