import React from 'react';
import {Field,reduxForm} from 'redux-form';
import Textarea from 'react-textarea-autosize';

class QuestionForm extends React.Component {

    renderError({error,touched}) {
        if (touched && error)
        return(
            <div className="ui error message">
                <div className="ui header">{error}</div>
            </div>
        )
    }

    renderInput = ({input,label,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return(
            <div className={className}>
                <label>{label}</label>
                <Textarea {...input} autoComplete="off" rows="1"/>
                {this.renderError(meta)}
            </div>
        )
    }

   

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
       return (
           <form className="question-form-wrap ui form container"　onSubmit={this.props.handleSubmit(this.onSubmit)}>
               <Field name="question" component={this.renderInput}/>
               <div className="question-button">
                    <button className="">質問する</button>
               </div>
           </form>
       )
    }
};

const validate = formValues => {
    const errors = {};

    if(!formValues.question){
        errors.question = '質問を入力してね';
    }

    return errors;
}

export default reduxForm({
    form: 'questionForm',
    validate
}) (QuestionForm);

