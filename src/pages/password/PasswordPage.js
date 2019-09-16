import React, { Component } from 'react';
import { connect } from 'react-redux';
import { passwordResettingAction } from '../../actions';
import PasswordForm from './PasswordForm';
import './style.scss'


class PasswordPage extends Component{
    
    onSubmit = (formValues) => {
        this.props.passwordResettingAction(formValues.email);
        this.props.history.push('/')
    }

    render() {

        return (
            <PasswordForm onSubmit={this.onSubmit}/>    
        )
    }
}

const mapStateToProps = (state) => {
    return {auth:state.auth}
}

export default connect(mapStateToProps,{passwordResettingAction})(PasswordPage);