import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import image1 from '../img/image.jpg';
import logo from '../img/logo.png'

function Header() {
    return (
        <>
            {/* <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4 col-6" >
                        <h1 className="brand_title pt-2"><img src={logo} alt="..." className="brand_logo" />AGNI</h1>
                        {/* <em>You cannot buy happiness.But you can buy GANI products and it's pretty close</em> */}
            {/* </div>
                    <div className="col-md-8 col-6">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className={({ isActive }) => (isActive ? "active dropdown-toggle" : "inactive dropdown-toggle")} data-bs-toggle="dropdown" to="/bags" role="button" aria-expanded="true">Products</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/bags">Bags</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/wallets">Wallets</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/belts">Belts</NavLink></li>
                                    <li><NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/pouches">Pouches</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/bags">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/wallet">Log In</NavLink>
                            </li>
                        </ul>
                    </div>
                </div> */}
            <Navbar />

            <div className='row' >
                <div className="col-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100" alt="wallet_img" style={{ height: '500px' }} />
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="d-block w-100" alt="bag_img" style={{ height: '500px' }} />
                            </div>
                            <div className="carousel-item">
                                <img src={image1} className="d-block w-100" alt="bag_img" style={{ height: '500px' }} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;