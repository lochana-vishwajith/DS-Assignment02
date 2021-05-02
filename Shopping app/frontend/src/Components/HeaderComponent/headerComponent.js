import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class headerComponent extends Component {
    render() {
        return (
            <nav className = "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <h1 className="navbar-brand">Online Shopping Platform</h1>
                    <div className="navbarOthers">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i className ="fas fa-cart-plus" id="cart-icon"/><p>Cart</p></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i className ="fas fa-user-circle" id="acc-icon"/><p>Account</p></Link>
                            </li>
                            <li className="nav-item" id="sign-div">
                                <Link className="nav-link" to="/"><i className ="fas fa-sign-in-alt" id="acc-icon"/><p>Login</p></Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to="/"><i className ="fas fa-registered" id="acc-icon"/><p>Register</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        )
    }
}
