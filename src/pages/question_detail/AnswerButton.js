import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ResponseForm from './ResponseForm';
import {createAnswer,fetchAnswers} from '../../actions'
import AnswerForm from './AnswerForm'

const AnswerButton = ({questionId, answerId, createAnswer,fetchAnswers,auth}) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const onClick = () => {setShowMessage(false)}

  useEffect(() => {
    // fetchResponses(questionId,answerId);
  });

  const onSubmit = (formValues) => {
    createAnswer(formValues,questionId,auth);
    //再読み込みして新規投稿を取得している
    fetchAnswers(questionId)
  }

  return (
    <div className="">
      {showButton && (
        <button
          className="ui icon button"
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          回答する
        </button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div
          onClose={() => setShowMessage(false)}
          className="ui card"
        >
            <AnswerForm onClick={onClick} onSubmit={onSubmit}/>
        </div>
      </CSSTransition>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {auth:state.auth}
}

export default connect(mapStateToProps,{createAnswer,fetchAnswers})(AnswerButton);
