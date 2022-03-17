import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Electronics from "./components/Electronics";
import Product from "./components/Product";
import Womens from "./components/Womens";
import Mens from "./components/Mens";
import Jewelery from "./components/Jewelery";
import Productdetail from "./components/Productdetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route exact path="/home" element={<Product />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products/:id" element={<Productdetail />} />
        <Route exact path="/products/electronics" element={<Electronics />} />
        <Route exact path="/electronics" element={<Electronics />} />
        <Route exact path="/products/mens" element={<Mens />} />
        <Route exact path="/mens" element={<Mens />} />
        <Route exact path="/products/womens" element={<Womens />} />
        <Route exact path="/womens" element={<Womens />} />
        <Route exact path="/products/jewelery" element={<Jewelery />} />
        <Route exact path="/jewelery" element={<Jewelery />} />
      </Routes>
    </>
  );
}

export default App;
