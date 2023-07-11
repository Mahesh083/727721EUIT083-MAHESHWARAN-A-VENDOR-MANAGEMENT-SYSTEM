import React, { useState } from "react";
import loginicon from "../src/assets/loginicon.png"
import './login.css';
import { Link } from "react-router-dom";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <div className="container">
        <h2>Register</h2>
        <img src={loginicon} className='img' width="200" height="100"/>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="password">Confirm password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <Link to="/login"><button type="submit">submit</button></Link>
            <center><Link to="/login"><b><h1>Already have an account? Login here.</h1></b></Link></center>
        </form>

    </div>
    </div>
    )
}