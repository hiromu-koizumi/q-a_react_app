import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ResponseForm from './ResponseForm';
import {createResponse,fetchResponses} from '../../actions'

const ResponseButton = ({questionId, answerId, createResponse,fetchResponses}) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const onClick = () => {setShowMessage(false)}

  const onSubmit = (formValues) => {
    createResponse(formValues,questionId,answerId);
    fetchResponses(questionId,answerId);

　  }

  return (
    <div className="">
      {showButton && (
        <button
          className="ui icon button"
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          <i className="comment outline icon"></i>
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
            <ResponseForm onClick={onClick} onSubmit={onSubmit}/>
        </div>
      </CSSTransition>
    </div>
  );
}

export default connect(null,{createResponse,fetchResponses})(ResponseButton);
