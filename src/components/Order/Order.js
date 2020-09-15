import React from 'react';
import styled from 'styled-components';

const OrderDiv = styled.div`
    width: 80%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
`;

const order = (props) => {
    // Get the ingredients list 
    const ingredientsList = [];
    for(let key in props.ingredients){
        if(props.ingredients[key] > 0){
            ingredientsList.push(
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>
                    : {props.ingredients[key]}
                </li>
            )
        }
    }


    return ( 
        <OrderDiv>
            <h3>Ingredients:</h3>
             {ingredientsList}
            <p>Price <strong>USD {props.price.toFixed(2)}</strong></p>
        </OrderDiv>
     );
}
 
export default order;