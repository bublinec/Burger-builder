import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from '../axios-orders';
import withErrorHandler from '../hoc/withErrorHandler';
import Button from '../components/UI/Button';
import Spinner from '../components/UI/Spinner';
import Input from '../components/UI/Input';
import * as actions from '../store/actions/index';


const Form = styled.form`
  margin: 40px auto;
  text-align: center;
  border: 2px solid grey;
  padding: 10px;
  width: 90%;
  max-width: 700px;
`;

class ContactDetails extends Component {
    state = {
        // form data handling in a very dynamic and neat way:
        // only edit this Form config
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'cheapest',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    }


    inputChangedHandler = (event, id) => {
        // deep clone 
        const updatedOrderForm = {
             ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[id]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkInputValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[id] = updatedFormElement;
        const formValidity = this.checkFormValidity(updatedOrderForm);
        this.setState({
            orderForm: updatedOrderForm,
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

     postOrderHandler = (event) => {
        event.preventDefault();
        // get the form data
        let formData = {};
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            formData: formData
        }
        this.props.purchaseBurger(order, this.props.history.push, this.props.token);
     }


     cancelOrderHandler = () => {
        this.props.history.replace('/');
     }

    render() { 
        // transform the orderForm config onject into array
        let formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        
        let form = (
            <Form onSubmit={this.postOrderHandler}>
                <h4>Enter your contact details please:</h4>
                {formElementsArray.map(El => (
                    <Input
                        key={El.id}
                        id={El.id}
                        {...El.config}
                        changed={this.inputChangedHandler}
                        invalid={!El.config.valid && El.config.touched}
                    />))
                }
                <Button type="danger" onClick={this.cancelOrderHandler}>CANCEL</Button>
                <Button type='success' disabled={!this.state.formIsValid}>ORDER</Button>
            </Form>
        )
        
        if(this.props.loading){
            form = <Spinner />
        }
        return (form);
    }
}

const mapStateToProps = state => ({
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
    loading: state.order.loading,
    token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
    purchaseBurger: (order, push, token) => dispatch(actions.purchaseBurger(order, push, token)),
})
 
export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(ContactDetails), axios);