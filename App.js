import React from 'react';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <NavBar />
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
