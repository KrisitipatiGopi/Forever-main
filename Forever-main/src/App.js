import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Collection from "./components/Collection";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
    <div className='md:mx-20 mx-10'>
      <Navbar />
      <Routes>
          <Route path='/Forever' element={<Home />} />
          <Route path='/' element={<Home/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path="/collections/:id" element={<ProductDetails />} />
       </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
