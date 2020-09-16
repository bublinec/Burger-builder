import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../axios-orders';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';
import Input from './Input';

const ContactFrom = styled.form`
  margin: 40px auto;
  text-align: center;
  border: 2px solid grey;
  padding: 10px;
  width: 50%;
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
                    minLength: 5,
                    maxLength: 5,
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
        formIsValid: false,
        loading: false
    }

     checkInputValidity = (value, rules) => {
        if (rules.required && value.trim() == '') {
            return false
        }
        if (rules.maxLength && value.length > rules.maxLength) {
            return false
        }
        if (rules.minLength && value.length < rules.minLength) {
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

        // Post the order
        this.setState({loading:true});
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading:false});
                this.props.history.push('/');
            })
            .catch(error => this.setState({loading:false}))
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

    render() { 
        // transform the orderForm config into an array
        let formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        
        let form = (
            <ContactFrom onSubmit={this.postOrderHandler}>
                <h4>Enter your contact details</h4>
                {formElementsArray.map(El => (
                    <Input
                        id={El.id}
                        {...El.config}
                        changed={this.inputChangedHandler}
                        invalid={!El.config.valid && El.config.touched}
                    />))
                }
                <Button type="danger">CANCEL</Button>
                <Button type='success' disabled={!this.state.formIsValid}>ORDER</Button>
            </ContactFrom>
        )
        
        if(this.state.loading){
            form = <Spinner />
        }
        return (form);
    }
}
 
export default ContactDetails;