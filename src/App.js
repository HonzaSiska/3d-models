import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import { useAuthContext } from './hooks/useAuthContext';



function App() {
  const {user} = useAuthContext()
  return (
    <main className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar/>
        </header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={user ?<Register/>: <Home/>}/>
          <Route path='/login' element={!user ?<Login/>: <Home/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          
          {/* <Route path='/product/login' element={<Login/>}/> */}
          {/* <Route path='/product/logout' element={<Logout/>}/> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
