import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skydek from "./pages/Skydek";
import Login from "./pages/Login";

import './App.css';

const App = () => {

  return (
    <div className='app'>
       <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Skydek/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
