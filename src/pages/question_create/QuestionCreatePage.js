import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuestion } from '../../actions';
import QuestionForm from './QuestionForm';
import Unusable from '../../components/qa/unusable/Unusable';

class QuestionCreatePage extends Component{
    
    onSubmit = (formValues) => {
        this.props.createQuestion(formValues,this.props.auth);
    }

    render() {

        if(!this.props.auth.isSignedIn){
           return <Unusable/>
        }

        return (
            <QuestionForm onSubmit={this.onSubmit}/>    
        )
    }
}

const mapStateToProps = (state) => {
    return {auth:state.auth}
}

export default connect(mapStateToProps,{createQuestion})(QuestionCreatePage);