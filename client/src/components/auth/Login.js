import React from 'react';
import Image1 from '../../img/image.jpg';
import Navbar from '../Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth'
import { Navigate } from 'react-router-dom';

const Login = ({ isAuthenticated, login }) => {
    const [user, setUser] = React.useState({ user_email: "", user_password: "" })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const { user_email, user_password } = user
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(login(user_email, user_password))
        login(user_email, user_password)
        //console.log(user_email)
    }
    if (isAuthenticated) {
        return <Navigate to="/" />
    }
    return (<> <Navbar />
        <div className='container register_container'>
            <div className="row justify-content-between align-items-start">
                <div className="col-md-6">
                    <img src={Image1} className="d-none d-md-block w-100 register_img" alt="Register_img" style={{ height: '400px' }} />
                </div>
                <div className="col-md-5 col-12 pt-4 register-content-container">
                    <h1 className="register_title">Log In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="user_email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="user_email" aria-describedby="emailHelp" onChange={handleChange} name="user_email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="user_password" onChange={handleChange} name="user_password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-lg auth_btn mt-5 mt-md-5  d-grid">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { login })(Login);