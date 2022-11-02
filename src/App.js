import './App.css';
import ItemDetailContainer from './components/contanier/ItemDetailContainer';
import ItemListContainer from './components/contanier/ItemListContanier';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/context/CartContext';
import Cart from './components/navbar/Cart';
import Footer from './components/footer/Footer';
function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemDetailContainer />} />
        <Route path='/:categoryName' element={<ItemListContainer />} />
        <Route path= '/cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
