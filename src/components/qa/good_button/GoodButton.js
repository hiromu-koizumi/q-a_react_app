import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../../actions';
import LoginForm from '../../../pages/login/LoginForm';
import './style.scss'


class GoodButton extends React.Component {

    onClick = () => {
        this.props.onClick(this.props.postData);
    }

    render() {
       return (
        <div className="good-button-wrap">
             <div onClick={this.onClick} className="">
                <i className="heart icon red"></i> 
            </div>
            <div　className="">
                {this.props.postData.goodCount}
            </div>
        </div>
       )
    }
};

export default connect((state)=>state,{loginAction})(GoodButton);



