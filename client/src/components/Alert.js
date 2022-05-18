import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) => {
    <>
        {alerts.map((alert) => {

            <div className="alert alert-success" role="alert">
                This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>


        })}
    </>
}






Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    alerts: state.alert
})
export default connect({ mapStateToProps })(Alert)