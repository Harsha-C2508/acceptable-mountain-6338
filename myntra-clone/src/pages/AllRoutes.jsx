import React from 'react'
import {Routes, Route,} from "react-router-dom";
import Bag from './Bag';
import Home from './Home';
import Login from './Login';
import Mens from './Mens';
import Shirt from './Shirt';
import Wishlist from './Wishlist';
import Women from './Women';
const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womens' element={<Women/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/wish' element={<Wishlist/>}/>
        <Route path='/bag' element={<Bag/>}/>
        <Route path='/mens/:id' element={<Shirt/>}/>
     </Routes>
    </div>
  )
}

export default AllRoutes;