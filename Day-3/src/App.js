import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import {  Routes, Route } from "react-router-dom";
import Home from "./home";

function App() {
  

  return (
    <div className="main">

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/reg" element={<Register/>}></Route>
  </Routes>
 
    </div>
  );
}



export default App;