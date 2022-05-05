import React from 'react';
import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Bags from './components/Bags';
import Wallet from './components/Wallet';
import Belts from './components/Belts';
import Pouches from './components/Pouches';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="bags" element={<Bags />}></Route>
      <Route path="wallets" element={<Wallet />}></Route>
      <Route path="belts" element={<Belts />}></Route>
      <Route path="pouches" element={<Pouches />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
