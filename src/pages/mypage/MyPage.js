import React,{useState,useCallback} from 'react';
import {connect} from 'react-redux';
import MyQuestionList from './MyQuestionList';
import MyAnswerList from './MyAnswerList';
import {myPageTabChange} from '../../actions';
import './style.scss'


 const MyPage = ({myPageTabChange,tab}) => {
   
    const handleClick = useCallback((event) => {
        myPageTabChange(event)
    }, []);

    return (
        <div>
            <div className="tab">
                <div className="tab-container">
                    <a href="#!" className={'tab-button' + ' ' + (tab === 'panel1' ? 'tab-botton-active' : '')} id="panel1" onClick={handleClick}>質問</a>
                    <a href="#!" className={'tab-button' + ' ' + (tab === 'panel2' ? 'tab-botton-active' : '')} id="panel2" onClick={handleClick}>回答</a>
                </div>
            </div>
            <div
            id="panel1"
            className={'tabpanel' + ' ' + (tab === 'panel1' ? 'tabpanel-active' : '')}
            >
            <MyQuestionList/>
        </div>
        <div 
           id="panel2"
           className={'tabpanel' + ' ' + (tab === 'panel2' ? 'tabpanel-active' : '')}
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

export default connect(mapStateToProps,{myPageTabChange})(MyPage);