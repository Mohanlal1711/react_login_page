import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './LoginPage.css';
import { FaUser, FaLock } from 'react-icons/fa';

export const LoginForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const username = "Admin";
        const password = "password";
        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;
        if (username === enteredUsername && password === enteredPassword) {
            // If the entered username and password match, navigate to the registration page
            navigate("/register");
        } else {
            // If the entered username or password is incorrect, display an error message
            alert("Your username or password is incorrect");
        }
    };

    return (
        <div className="wrapper">
            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" id="username" placeholder="UserName" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" id="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                </div>
                <button onClick={handleFormSubmit} type="button">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;