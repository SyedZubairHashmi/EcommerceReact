import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Login/> */}
      {/* <Cart/>  */}
       {/* <Register/> */}


      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/list' element={<ProductList/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
