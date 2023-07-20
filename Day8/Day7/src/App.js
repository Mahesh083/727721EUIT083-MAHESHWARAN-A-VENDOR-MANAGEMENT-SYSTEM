import React,{useState} from "react";
// import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import CommentsForm from "./commentsform";
import Forms from "./Register";
import AboutPage from "./about";
import Products from "./products";
import Succes from "./succes";




function App() {
return (
    <div>
    <div className="main">
    <footer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/reg" element={<Forms/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/feedback" element={<CommentsForm/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/success" element={<Succes/>}></Route>

  </Routes>


  </div>
 

  

 
    </div>
  );
}



export default App;