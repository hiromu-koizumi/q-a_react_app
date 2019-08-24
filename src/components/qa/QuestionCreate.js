import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuestion } from '../../actions';
import QuestionForm from './QuestionForm';

class QuestionCreate extends Component{
    
  
    onSubmit = (formValues) => {
        this.props.createQuestion(formValues);
    }

    render() {
        return (
            <QuestionForm onSubmit={this.onSubmit}/>    
        )
    }
}

export default connect((state)=>state,{createQuestion})(QuestionCreate);