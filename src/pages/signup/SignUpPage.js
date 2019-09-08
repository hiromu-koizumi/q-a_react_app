import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
import SignUpForm from './SignUpForm';
import './style.scss'

class SignUp extends Component{
    
    onSubmit = (formValues) => {
       this.props.signUp(formValues);  
       this.props.history.push('/')     
    }

    render() {
        return (
            <SignUpForm onSubmit={this.onSubmit}/>    
        )
    }
}

export default connect((state)=>state,{signUp})(SignUp);