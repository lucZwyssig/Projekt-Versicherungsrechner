import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Calculator from './DamageCalculator';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="calculator" element={<Calculator/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
