import React from 'react'
import styled from 'styled-components';
import Burger from '../Burger/Burger';
import Button from '../UI/Button';


// const CheckoutSummaryDiv = styled.div`
//   text-align: center;
//   width: 80%;
//   margin: 20px auto;
//   @media (min-width: 800px) {
//       width: 500px;
//   }
// `;

const CheckoutSummary = (props) => {
    return ( 
        <div style={{textAlign: 'center', margin: '80px'}}>
            <h1>You Burger:</h1>
            <div>
                <Burger ingredients={props.ingredients}/>           
            </div>
            <div>
                <Button type="danger" onClick={props.checkoutCancelHandler}>CANCEL</Button>
                <Button type="success" onClick={props.checkoutContinueHandler}>CONTINUE</Button>
            </div>
            
        </div>
     );
}
 
export default CheckoutSummary;