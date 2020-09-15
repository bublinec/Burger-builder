import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../../axios-orders';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';

const ContactFrom = styled.form`
  margin: 40px;
  text-align: center;
  border: 2px solid grey;
  padding: 10px;
`;

const Input = styled.input`
  display: block;
  margin: 20px auto;
`;

class ContactDetails extends Component {
    state = { 
        name: '',
        email: '',
        address: {
            street: '',
            postalCoda: '',
        },
        loading: false
     }

     postOrderHandler = (event) => {
        event.preventDefault();

        // Post the order
        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Peter Lauro',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest',
            error: null,
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading:false});
                this.props.history.push('/');
            })
            .catch(error => this.setState({loading:false}))
     }


    render() { 
        
        let form = (
            <ContactFrom>
                <h4>Enter your contact details</h4>
                <Input type='text' name='name' placeholder='Your Name' />
                <Input type='text' name='email' placeholder='Your Email' />
                <Input type='text' name='street' placeholder='Your Street' />
                <Input type='text' name='postalCode' placeholder='Your Postal Code' />
                <Button type="danger">CANCEL</Button>
                <Button type='success' onClick={this.postOrderHandler}>ORDER</Button>
            </ContactFrom>
        )
        
        if(this.state.loading){
            form = <Spinner />
        }
        return (form);
    }
}
 
export default ContactDetails;