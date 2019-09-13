import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import Textarea from 'react-textarea-autosize';


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
                <Textarea autoFocus {...input} autoComplete="off" rows="1"/>
                {/* {this.renderError(meta)} */}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        this.props.onClick();
    }

    render(){

        if (this.props.auth.isSignedIn === null){
            return (
                <Link to="/qa/signup" className="content">
                    登録してね
                </Link>
            ) 
        }

       return (
           <div className="content">
               <div className="x-button">
                    <button className="" onClick={this.props.onClick}>
                        <i className='x icon'></i>
                    </button>
               </div>
                <form className="ui form error"　onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="response" component={this.renderInput} label="返信" />
                    <div className="response-inner-button">
                        <button className="ui green inverted button" >返信</button>
                    </div>
                </form>
           </div>
        )
    }
};

const validate = formValues => {
    const errors = {};

    if(!formValues.response){
        errors.response = '返信をを入力してね';
    }

    return errors;
}


export default reduxForm({
    form: 'responseForm',
    validate
}) (ResponseForm);

