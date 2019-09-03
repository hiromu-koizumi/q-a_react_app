import React from 'react';
import {Field,reduxForm} from 'redux-form';

class AnswerForm extends React.Component {

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
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(this.props.id)
        this.props.onSubmit(formValues,this.props.id);
    }

    render(){
       return (
           <form className="ui form error"　onSubmit={this.props.handleSubmit(this.onSubmit)}>
               <Field name="answer" component={this.renderInput} label="回答"/>
               <button className="ui button primary">回答する</button>
           </form>
       )
    }
};

const validate = formValues => {
    const errors = {};

    if(!formValues.answer){
        errors.answer = '回答入力してね';
    }

    return errors;
}

export default reduxForm({
    form: 'answerForm',
    validate
}) (AnswerForm);

