import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Spinner from '../components/UI/Spinner';
import * as actions from '../store/actions';

const FormDiv = styled.div`
  margin: 40px auto;
  text-align: center;
  border: 2px solid grey;
  padding: 10px;
  width: 90%;
  max-width: 450px;
`;

class Auth extends Component {
    state = { 
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail adress'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },            
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
            },
        },
        isSignup: true
     }

     inputChangedHandler = (event, id) => {
        // deep clone 
        const updatedForm = {
             ...this.state.controls
        };
        const updatedFormElement = {
            ...updatedForm[id]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkInputValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[id] = updatedFormElement;
        const formValidity = this.checkFormValidity(updatedForm);
        this.setState({
            controls: updatedForm,
            formIsValid: formValidity
        });
     }

     checkInputValidity = (value, rules) => {
        const clearedValue = value.replace(/ /g,'');;
        if (rules.required && clearedValue === '') {
            return false
        }
        if (rules.maxLength && clearedValue.length > rules.maxLength) {
            return false
        }
        if (rules.minLength && clearedValue.length < rules.minLength) {
            return false
        }
        return true;
     }

     checkFormValidity = (form) => {
        for(let key in form){
            if(!form[key].valid){
                return false;
            };
        }
        return true;
    }

    loginSubmitHandler = (event) => {
        event.preventDefault();
        this.props.auth(
            this.state.controls.email.value, 
            this.state.controls.password.value, 
            this.state.isSignup,
            this.props.history.push,
            this.props.authRedirectUrl);    
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => ({
            isSignup: !prevState.isSignup
        }))
    }

    render() { 
        // transform the form controls object into array
        let formElementsArray = [];
        for(let key in this.state.controls){
            formElementsArray.push({
                inputName: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formEl => (
            <Input
                key={formEl.inputName}
                id={formEl.inputName}
                {...formEl.config}
                changed={this.inputChangedHandler}
                invalid={!formEl.config.valid && formEl.config.touched}>
            </Input>
        ))
        
        let errorMessage = null;
        if(this.props.error){
            errorMessage = <p style={{color: '#800020'}}>{this.props.error.message}</p>
        }

        let formPanel = <Spinner />;
        if (!this.props.loading){
            formPanel = (
                <div>
                    <FormDiv>
                        <h3>{this.state.isSignup ? 'Sign Up' : 'Log In'}</h3>
                        <form>
                            {form}
                        </form>
                        <Button type='success' onClick={this.loginSubmitHandler}>{this.state.isSignup ? 'SIGN UP' : 'LOGIN'}</Button>
                        <hr style={{marginTop: '40px'}} />
                        <p>{this.state.isSignup ? 'Already have any account?' : 'Don\'t have an account yet?'}</p>
                        <Button type='danger' onClick={this.switchAuthModeHandler}>GO TO {this.state.isSignup ? 'LOGIN' : 'SIGN UP'}</Button>
                        {errorMessage}
                    </FormDiv>
                </div>
            );
        };

        return formPanel;
    }
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    error: state.auth.error,
    authRedirectUrl: state.auth.authRedirectUrl
})
 
const mapDispatchToProps = dispatch => ({
    auth: (email, password, isSignup, push, authRedirectUrl) => dispatch(actions.auth(email, password, isSignup, push, authRedirectUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);