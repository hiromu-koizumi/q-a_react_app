import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import './style.scss'
import {myPageOptionChange} from '../../actions';


const OptionButton = ({showButton,showMessage,setShowMessage,myPageOptionChange}) => {
    
    return (
        <div className="option-wrap">
            {showButton && (
            <div className="option-button">
                <button
                className=""
                onClick={() => myPageOptionChange(true)}
                size="lg"
                >
                    <i className="icon ellipsis horizontal"></i>
                </button>
            </div>
        )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="answer"
        unmountOnExit
        // onEnter={() => setShowButton(false)}
        // onExited={() => myPageOptionChange(false)}
      >
        <div
        //   onClose={() => setShowMessage(false)}
          className="answer-form-wrap ui card"
        >
            <div>
                aaaaaa
            </div>
            {/* <AnswerForm onClick={onClick} onSubmit={onSubmit} auth={auth}/> */}
        </div>
      </CSSTransition>
    </div>
  );
    
}

const mapStateToProps = (state) => {
    return {
        showButton:state.myPageOption.showButton,
        showMessage:state.myPageOption.showMessage,

    }
}

export default connect(mapStateToProps,{myPageOptionChange})(OptionButton);