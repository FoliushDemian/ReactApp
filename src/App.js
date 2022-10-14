import React from "react";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Cart from "./pages/cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
