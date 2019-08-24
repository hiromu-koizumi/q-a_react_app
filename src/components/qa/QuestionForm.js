import React from 'react';
import {Field,reduxForm} from 'redux-form';

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
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(this.props.id)
        this.props.onSubmit(formValues);
    }

    render(){
       return (
           <form className="ui form error"　onSubmit={this.props.handleSubmit(this.onSubmit)}>
               <Field name="name" component={this.renderInput} label="名前"/>
               <Field name="title" component={this.renderInput} label="タイトル"/>
               <Field name="question" component={this.renderInput} label="質問"/>
               <button className="ui green inverted button">質問する</button>
           </form>
       )
    }
};

const validate = formValues => {
    const errors = {};

    if (!formValues.name){
        errors.name = '名前入力してね';
    }

    if(!formValues.title){
        errors.answer = 'タイトルを入力してね';
    }
    if(!formValues.question){
        errors.answer = '質問を入力してね';
    }

    return errors;
}

export default reduxForm({
    form: 'questionForm',
    validate
}) (QuestionForm);

