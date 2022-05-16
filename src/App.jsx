import React, { useState } from "react";
import "./App.css";
import Team from "./Component/Squad/Team";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Navbar/Nav";
import Cart from "./Component/Cart/Cart";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Team />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
