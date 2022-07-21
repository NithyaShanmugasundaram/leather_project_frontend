import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) => {
    //console.log(alerts)
    return (
        <>
            {
                alerts.map((alert) => {
                    < div className="alert alert-success" role="alert" >
                        <a href="#" className="alert-link">shfgshjfjshdfj</a>
                    </div>
                })
            }
        </>)
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
    alerts: state.alert
})
export default connect({ mapStateToProps })(Alert)