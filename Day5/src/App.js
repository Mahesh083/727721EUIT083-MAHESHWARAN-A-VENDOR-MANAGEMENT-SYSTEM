import React,{useState} from "react";
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from "./home";
import Forms from "./Register";
import Login from "./Login";
import Products from "./products";


function App() {
return (
    <div>
    <div className="main">
    <footer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/reg" element={<Forms/>}></Route>
    <Route path="/products" element={<Products/>}></Route>

  </Routes>
  </div>
 

  

 
    </div>
  );
}



export default App;