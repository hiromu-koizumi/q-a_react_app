import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ResponseForm from './ResponseForm';
import {createResponse,fetchResponses} from '../../../actions'
import Unusable from '../../../components/qa/unusable/Unusable'
import './style.scss'

const ResponseButton = ({questionId, answerId, createResponse,fetchResponses,auth,answerUserId}) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const onClick = () => {setShowMessage(false)}

  const onSubmit = (formValues) => {
    console.log(answerUserId)
    createResponse(formValues,questionId,answerId,answerUserId);
　  }

  useEffect(() => {
    fetchResponses(questionId,answerId);
  });

  return (
    <div className="response">
      {showButton && (
        <div className="response-button">
          <button  
            onClick={() => setShowMessage(true)}
            size="lg"
          >
            <i className="comment outline icon"></i>
          </button>
        </div>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="response"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div className="response-form-wrap">
          <div
          onClose={() => setShowMessage(false)}
          className="ui card"　id="response-form"
          > 
            {auth.isSignedIn === null ?
              <Unusable/> :
              <ResponseForm onClick={onClick} onSubmit={onSubmit} auth={auth}/>}
          </div>
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

export default connect(mapStateToProps,{createResponse,fetchResponses})(ResponseButton);
