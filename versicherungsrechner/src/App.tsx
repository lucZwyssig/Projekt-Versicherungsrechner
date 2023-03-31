import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Calculator from './Pages/DamageCalculator';
import Memory from './Pages/Memory';
import Comparer from './Pages/Comparer';

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
