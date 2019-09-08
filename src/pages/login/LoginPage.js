import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';
import LoginForm from './LoginForm';
import './style.scss'

class Login extends Component{
    
  
    onSubmit = (formValues) => {
       this.props.loginAction(formValues); 
       this.props.history.push('/')      
    }

    render() {
        return (
            <LoginForm onSubmit={this.onSubmit}/>    
        )
    }
}

export default connect((state)=>state,{loginAction})(Login);