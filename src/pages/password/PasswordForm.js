import React from 'react';
import {Field,reduxForm} from 'redux-form';
import Textarea from 'react-textarea-autosize';


class PasswordForm extends React.Component {

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
                <Textarea autoFocus {...input} autoComplete="off" rows="1"/>
                {this.renderError(meta)}
            </div>
        )
    }

   

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
       return (
            <>
                <p className="password-form-text">
                    登録されたメールアドレスに、パスワード再設定用のURLを送信します
                </p>
                <form className="password-form-wrap ui form container"　onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="email" component={this.renderInput} label="メールアドレス" />
                    <div className="password-form-button">
                        <button className="">送信する</button>
                    </div>
                </form>
           </>
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
    form: 'passwordForm',
    validate
}) (PasswordForm);

