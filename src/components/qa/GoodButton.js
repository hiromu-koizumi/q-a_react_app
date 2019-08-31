import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';
import LoginForm from './LoginForm';


class GoodButton extends React.Component {

    onClick = () => {
        this.props.onClick(this.props.questionData);
    }

    render() {
       return (
        <div className="ui labeled button" >
             <div onClick={this.onClick} className="ui circular red button">
                <i className="heart icon"></i> 
            </div>
            <a　className="ui basic red left label">
                {this.props.questionData.goodCount}
            </a>
        </div>
       )
    }
};

export default connect((state)=>state,{loginAction})(GoodButton);



