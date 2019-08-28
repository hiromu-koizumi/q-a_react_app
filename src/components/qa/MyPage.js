import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
import { directive } from '@babel/types';

class MyPage extends Component{
    
  
    onSubmit = (formValues) => {
       this.props.signUp(formValues);       
    }

    render() {
        return (
            <div>aaaaa</div>
        )
    }
}

export default connect((state)=>state,{signUp})(MyPage);