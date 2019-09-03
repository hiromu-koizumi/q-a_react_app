import React from 'react';
import {Field,reduxForm} from 'redux-form';


class ResponseForm extends React.Component {

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
        this.props.onSubmit(formValues);
    }

    render(){
       return (
            <div className="content">
                <button className="ui icon button" onClick={this.props.onClick}>
                    <i className='x icon'></i>
                </button>
                <form className="ui form error"　onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="response" component={this.renderInput} label="返信"/>
                    <button className="ui green inverted button" >登録する</button>
                </form>
           </div>
        )
    }
};

const validate = formValues => {
    const errors = {};

    if (!formValues.name){
        errors.name = '名前入力してね';
    }

    if(!formValues.response){
        errors.answer = '返信をを入力してね';
    }

    return errors;
}


export default reduxForm({
    form: 'responseForm',
    validate
}) (ResponseForm);

