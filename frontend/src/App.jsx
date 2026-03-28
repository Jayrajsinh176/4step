import React from 'react'
import './App.css'
import Header from './components/header'
import LoginPage from './pages/Login'
import Signup from './pages/Signup'

import Home from './pages/home'
import AllProduct from './pages/allproduct'
import Product from './pages/product'
import Helpform from './components/helpform'
import Checkout from './components/checkout'
import CheckoutFinal from './components/checkoutfinal'
import UpFooter from './components/upfooter'
import Footer from './components/footer'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/home" element={<Home />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/helpform" element={<Helpform />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutfinal" element={<CheckoutFinal />} />
      </Routes>

      {!hideLayout && (
        <>
          <UpFooter />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;
