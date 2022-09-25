import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import ProductProvider from './context/ProductProvider';
import Home from './pages/Home';
import Product from './pages/Product';


function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar/>
        </header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/product/:id' element={<Product/>}/>
          
          {/* <Route path='/product/login' element={<Login/>}/> */}
          {/* <Route path='/product/logout' element={<Logout/>}/> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
