import React from 'react';
import  { Field , reduxForm } from "redux-form";

class StreamForm extends React.Component{

    message(meta){
        if(meta.touched && meta.error)
        {
            return(
                <div className="ui error message">
                <div className="header">
                {meta.error}
                </div>
                </div>
            )
        } 
    }

    renderInput = (formProps)=> {
        return (
        <div className="field" >
            <label>{formProps.label}</label>
            <input autoComplete="off" {...formProps.input}  />

           
        {this.message(formProps.meta)}
          
          
        </div>)
    }

    onSubmit = (formValues)=>
    {
       this.props.onSubmit(formValues);
       
    }
    render()
    {
    return (<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
        <Field name="title" label="Enter Title" component={this.renderInput} >

        </Field>
        <Field name="description" label="Enter Description" component={this.renderInput}    >

        </Field>
        <Field name="author" label="Enter Your Name" component={this.renderInput}    >

        </Field>

        <button className="ui button primary">Submit</button>
    </form>);
    }
}

const validate = (formValues)=>{
   

    const errors  = {};

    if(!formValues.title)
    {
        errors.title = "Enter a title";
    }
    if(!formValues.description)
    {
        errors.description = "Enter a description";
    }
    if(!formValues.author)
    {
        errors.author = "Please enter your name";
    }

    return errors;
}

export default reduxForm(
    {
        validate,
        form:"streamForm"
    }
)(StreamForm);

