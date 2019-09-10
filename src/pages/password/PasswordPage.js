import React, { Component } from 'react';
import { connect } from 'react-redux';
import { passwordResettingAction } from '../../actions';
import PasswordForm from './PasswordForm';
// import './style.scss'

// const PasswordPage = () => {

//     const submit = (formValues) =>{
//         passwordResettingAction(formValues)
//     }
//     return (
//         <PasswordForm submit={submit}/>
//     )
// }

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