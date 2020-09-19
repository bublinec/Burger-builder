import React from 'react'
import styled from 'styled-components';
import Burger from '../Burger/Burger';
import Button from '../UI/Button';

const CheckoutSummaryDiv = styled.div`
  text-align: center;
  margin: 40px;
  padding: 10px;
  border: 2px solid grey;
`;

const CheckoutSummary = (props) => {
    return ( 
        <CheckoutSummaryDiv>
            <h1>So that's your Burger, is it all right?</h1>
            <div>
                <Burger ingredients={props.ingredients}/>           
            </div>
            <div>
                <Button type="danger" onClick={props.checkoutCancelHandler}>NOT SURE</Button>
                <Button type="success" onClick={props.checkoutContinueHandler}>LOOKS GOOD, GO ON!</Button>
            </div>
        </CheckoutSummaryDiv>
     );
}
 
export default CheckoutSummary;