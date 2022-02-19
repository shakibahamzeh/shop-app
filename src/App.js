
import './App.css';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import{Routes,Route,Navigate} from "react-router-dom"
import ProductsDetail from './components/ProductsDetail';
import CartContextProvider from './context/CartContextProvider';
import ShopCart from './components/ShopCart';
import Navbar from './components/Navbar';

function App() {
  return (
<ProductContextProvider>
 <CartContextProvider>
   <Navbar/>
    <Routes>
    <Route path="/products/:id" element={<ProductsDetail/>}/>
    <Route path="/products" element={<Store/>}/>
    <Route path="/cart" element={<ShopCart/>}/>
    <Route path="/*" element={<Navigate to="/products"/>}/>
  </Routes>
 </CartContextProvider>
</ProductContextProvider>
  );
}

export default App;
