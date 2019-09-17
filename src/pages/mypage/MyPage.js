import React,{useState,useCallback} from 'react';
import {connect} from 'react-redux';
import MyQuestionList from './MyQuestionList';
import MyAnswerList from './MyAnswerList';
import {myPageTabChange,myPageOptionChange} from '../../actions';
import OptionPage from './OptionButton'
import './style.scss'


 const MyPage = ({myPageTabChange,tab,myPageOptionChange}) => {

   
    const handleClick = useCallback((event) => {
        myPageTabChange(event)
    }, []);

   const optionClose = () => {
        myPageOptionChange(false)
    }

    return (
        <div className="" >
            <div className="mypage-tab">
                <div className="mypage-tab-container">
                    <a href="#!" className={'mypage-tab-button' + ' ' + (tab === 'question-tab' ? 'tab-botton-active' : '')} id="question-tab" onClick={handleClick}>質問</a>
                    <a href="#!" className={'mypage-tab-button' + ' ' + (tab === 'answer-tab' ? 'tab-botton-active' : '')} id="answer-tab" onClick={handleClick}>回答</a>
                </div>
            </div>
            <OptionPage/>
            <div
            id="question-tab"
            onClick={optionClose}
            className={'mypage-tabpanel' + ' ' + (tab === 'question-tab' ? 'mypage-tabpanel-active' : '')}
            >
                <MyQuestionList/>
            </div>
            <div 
            id="answer-tab"
            onClick={optionClose}
            className={'mypage-tabpanel' + ' ' + (tab === 'answer-tab' ? 'mypage-tabpanel-active' : '')}
            >
                <MyAnswerList/>
            </div>
        </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        tab:state.myPageTab.tab
    }
}

export default connect(mapStateToProps,{myPageTabChange,myPageOptionChange})(MyPage);