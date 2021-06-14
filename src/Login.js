import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button type="submit" className="login__signInButton">Sign in</button>
                </form>
                <p>
                    By signin-in, you agree to Amazon's Terms and Conditions
                </p>
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login;