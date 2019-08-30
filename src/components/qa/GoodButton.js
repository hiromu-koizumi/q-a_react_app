import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';
import LoginForm from './LoginForm';


class GoodButton extends React.Component {

    onClick = () => {
        this.props.onClick(this.props.postData);
    }

    render() {
       return (
        <div className="ui labeled button" >
             <div onClick={this.onClick} className="ui circular red button">
                <i className="heart icon"></i> 
            </div>
            <a　className="ui basic red left label">
                1,048
            </a>
        </div>
       )
    }
};

export default connect((state)=>state,{loginAction})(GoodButton);



