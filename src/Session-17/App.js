import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Notifications from './pages/Notifications';
import Account from './pages/Account';
import './App.css'

function App() {
  return <div className='flex-col Fill-Page'>
    <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='gallery' element={<Gallery />}></Route>
        <Route path='notifications' element={<Notifications />}></Route>
        <Route path='account' element={<Account />}></Route>
    </Routes>

    <Navbar></Navbar>
  </div>
}

export default App