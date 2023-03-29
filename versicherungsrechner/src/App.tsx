import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Calculator from './DamageCalculator';
import Memory from './Memory';
import Comparer from './Comparer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="calculator" element={<Calculator/>} />
        <Route path="memory" element={<Memory/>} />
        <Route path="comparer" element={<Comparer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
