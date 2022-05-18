import React from 'react';
import { connect } from 'react-redux';
import Image1 from '../img/image.jpg';
import Navbar from './Navbar';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [user, setUser] = React.useState({
        user_name: '',
        user_email: "",
        user_password: "",
        user_confirm_password: ""
    })
    const { user_name, user_email, user_password, user_confirm_password } = user;
    const handleChange = (e) => setUser({
        ...user,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user_password !== user_confirm_password) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ user_name, user_email, user_password });
        }
    }
    if (isAuthenticated) {
        return <Navigate to="/bags" />;
    }
    return (<>
        <Navbar />
        <div className='container register_container'>
            <div className="row justify-content-between align-items-center">
                <div className="col-md-6">
                    <img src={Image1} className="d-none d-md-block w-100 register_img" alt="Register_img" style={{ height: '400px' }} />
                </div>
                <div className="col-md-5">
                    <h1 className="register_title">Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="user_name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="user_name" aria-describedby="username" name="user_name" onChange={handleChange} value={user.user_name} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="user_email" aria-describedby="emailHelp" name="user_email" onChange={handleChange} value={user.user_email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="user_password" name="user_password" onChange={handleChange} value={user.user_password} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_confirm_password" className="form-label"> Confirm Password</label>
                            <input type="password" className="form-control" id="user_confirm_password" name="user_confirm_password" onChange={handleChange} value={user.user_confirm_password} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-lg auth_btn mt-4 mt-md-5  d-grid">Submit</button>
                    </form>
                </div>
                <p className="m-2">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </div>
        </div>
    </>);
}
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
const mapStateToProps = (state) => {

    return (
        {
            isAuthenticated: state.auth.isAuthenticated
        })
};
export default connect(mapStateToProps, { setAlert, register })(Register);
