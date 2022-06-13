import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

function Navbar({ isAuthenticated, logout }) {
    return (<>
        <nav className="navbar navbar-expand-md navbar-light mx-0">
            <div className="container-fluid">
                <NavLink className="brand_title" to="/"><img src={logo} alt="brand_logo" className="brand_logo" />AGNI</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {!isAuthenticated ? <><li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/" >Home</NavLink>
                        </li>
                            <li className="nav-item  dropdown">
                                <NavLink className={({ isActive }) => (isActive ? "active dropdown-toggle" : "inactive dropdown-toggle")} data-bs-toggle="dropdown" to="/bags" role="button" aria-expanded="true">Products</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/bags">Bags</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/wallets">Wallets</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/belts">Belts</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/pouches">Pouches</NavLink></li>
                                </ul>
                            </li><li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/login">Log In</NavLink>
                            </li></> : <>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item  dropdown">
                                <NavLink className={({ isActive }) => (isActive ? "active dropdown-toggle" : "inactive dropdown-toggle")} data-bs-toggle="dropdown" to="/bags" role="button" aria-expanded="true">Products</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/bags">Bags</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/wallets">Wallets</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/belts">Belts</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/pouches">Pouches</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to=""><span className="bi bi-cart"></span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="" onClick={logout}>Log Out</NavLink>
                            </li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </nav></>);
}

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func
};
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}
export default connect(mapStateToProps, { logout })(Navbar);