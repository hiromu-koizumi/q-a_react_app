import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuestion } from '../../actions';
import QuestionForm from './QuestionForm';

class QuestionCreate extends Component{
    
  
    onSubmit = (formValues) => {
        this.props.createQuestion(formValues,this.props.auth);
    }

    render() {
        return (
            <QuestionForm onSubmit={this.onSubmit}/>    
        )
    }
}

const mapStateToProps = (state) => {
    return {auth:state.auth.userId}
}

export default connect(mapStateToProps,{createQuestion})(QuestionCreate);