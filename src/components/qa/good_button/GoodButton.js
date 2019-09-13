import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../../actions';
import LoginForm from '../../../pages/login/LoginForm';
import './style.scss'


class GoodButton extends React.Component {

    onClick = (e) => {
        if(e.target.checked){
            console.log(this.props.postData)
            this.props.onClick(this.props.postData);
        }        
    }

    render() {
       return (
        <div className="good-button-wrap">
             {/* <div onClick={this.onClick}>
                <i className="heart icon red"></i> 
            </div> */}
            <div>
            {/* 　　どのハートが押されたか識別するためにIdが必要。詳細ページでは、回答は同じquestionIdを取得しているためanswerIdで識別する必要がある。 */}
                <input onClick={this.onClick} id={this.props.postData.answerId ? this.props.postData.answerId : this.props.postData.questionId} type="checkbox"/>
                <label htmlFor={this.props.postData.answerId ? this.props.postData.answerId : this.props.postData.questionId}>❤</label>
            </div>
            <div　className="good-button-count">
                {this.props.postData.goodCount}
            </div>
        </div>
       )
    }
};

export default connect((state)=>state,{loginAction})(GoodButton);



