import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ResponseForm from '../response_create/ResponseForm';
import {createAnswer,fetchAnswers} from '../../../actions'
import AnswerForm from './AnswerForm'
import Unusable from '../../../components/qa/unusable/Unusable'

import './style.scss'

const AnswerButton = ({questionId, answerId, createAnswer,fetchAnswers,auth,questionData}) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const onClick = () => {setShowMessage(false)}

  const onSubmit = (formValues) => {
    console.log(questionData)
    createAnswer(formValues,questionId,auth,questionData);
    //再読み込みして新規投稿を取得している
    fetchAnswers(questionId)
  }

  return (
    <div className="answer">
      {showButton && (
        <div className="answer-button">
          <button
            className="ui icon button"
            onClick={() => setShowMessage(true)}
            size="lg"
          >
            回答する
          </button>
        </div>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="answer"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div
          onClose={() => setShowMessage(false)}
          className="answer-form-wrap ui card"
        >
          {auth.isSignedIn === null ?
        <Unusable/> :
            <AnswerForm onClick={onClick} onSubmit={onSubmit} auth={auth} questionData={questionData}/>}
        </div>
      </CSSTransition>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth:state.auth,  
  }
}

export default connect(mapStateToProps,{createAnswer,fetchAnswers})(AnswerButton);
