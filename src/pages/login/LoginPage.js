import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';
import LoginForm from './LoginForm';

class Login extends Component{
    
  
    onSubmit = (formValues) => {
       this.props.loginAction(formValues);       
    }

    render() {
        return (
            <LoginForm onSubmit={this.onSubmit}/>    
        )
    }
}

export default connect((state)=>state,{loginAction})(Login);