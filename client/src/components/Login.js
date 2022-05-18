import React from 'react';
import Image1 from '../img/image.jpg';
import Navbar from './Navbar';

const Login = () => {
    return (<> <Navbar />
        <div className='container register_container'>
            <div className="row justify-content-between align-items-start">
                <div className="col-md-6">
                    <img src={Image1} className="d-none d-md-block w-100 register_img" alt="Register_img" style={{ height: '400px' }} />
                </div>
                <div className="col-md-5 col-12 pt-4 register-content-container">
                    <h1 className="register_title">Log In</h1>
                    <form>

                        <div className="mb-3">
                            <label htmlFor="user_email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="user_email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="user_password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-lg auth_btn mt-5 mt-md-5  d-grid">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default Login;