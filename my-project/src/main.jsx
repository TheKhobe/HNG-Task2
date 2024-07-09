import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Filter from './pages/Filter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route exact path= '/' element={<Home />} />
      <Route exact path= '/check' element={<Checkout />} />
      <Route exact path= '/cart' element={<Cart />} />
      <Route exact path= '/filter' element={<Filter />} />
    </Routes>
  </Router>
)
