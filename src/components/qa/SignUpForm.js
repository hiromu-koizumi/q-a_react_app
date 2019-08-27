import React from 'react';
import {Field,reduxForm} from 'redux-form';

const mail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'メールアドレスが間違っているよ' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const minLength = min => value =>
  value && value.length < min ? `パスワードは６文字以上にしてね` : undefined
const minLength6 = minLength(6)

class SignUpForm extends React.Component {

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
               <Field name="mail" component={this.renderInput} label="メールアドレス"  validate={mail} warn={aol}/>

               <Field name="password" component={this.renderInput} label="パスワード"　validate={minLength6}/>
               <button className="ui green inverted button">登録する</button>
           </form>
       )
    }
};


export default reduxForm({
    form: 'signupForm',
}) (SignUpForm);
