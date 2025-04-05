import React from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
// dont use index as key(not recommended) instead use id as key 
const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
      <Route path="/" index element={<Body/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/restaurant/:resid' element={<RestaurantMenu/>}/>
      <Route path="*" element={<Error />} /> 
    </Routes>
    </div>
    </BrowserRouter>
   
  )
}
 
export default App;

