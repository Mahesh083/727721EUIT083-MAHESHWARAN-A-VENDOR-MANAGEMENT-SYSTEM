import React, { useState } from "react";
import image2 from "../src/assets/image2.png"
import { Link } from "react-router-dom";
import './login.css';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <div className="container">
        <h2>Login</h2>
        <img src={image2} className='img' width="150" height="150" />
            <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit"><Link to="/">submit</Link></button>
            </form>
            <center><Link to="/reg"><b><h1>Don't have an account? Register here.</h1></b></Link></center>
            </div>
            </div>
            )
        }