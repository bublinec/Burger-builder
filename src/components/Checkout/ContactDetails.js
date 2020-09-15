import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const ContactFrom = styled.form`
  margin: 100px auto;
  width: 80%;
  text-align: center;
  @media (min-width: 600px) {
      width: 500px;
  }
  border: 2px solid grey;
  padding: 30px;
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
        }
     }
    render() { 
        return ( 
            <div>
                <ContactFrom>
                    <h4>Enter your contact details</h4>
                    <Input type='text' name='name' placeholder='Your Name' />
                    <Input type='text' name='email' placeholder='Your Email' />
                    <Input type='text' name='street' placeholder='Your Street' />
                    <Input type='text' name='postalCode' placeholder='Your Postal Code' />
                    <Button type='success' onClick>ORDER</Button>
                    <Button type="danger" onClick>CANCEL</Button>

                </ContactFrom>
            </div>
         );
    }
}
 
export default ContactDetails;