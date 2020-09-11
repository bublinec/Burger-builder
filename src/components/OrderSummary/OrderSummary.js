import React, { Fragment } from 'react';

const OrderSummary = (props) => {

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
        
    let orderSummary;

    if(ingredientsList.length <= 0){
        orderSummary = <h3>Do you really want to eat just a stale bread?</h3>    
    }else{
        orderSummary = (
            <Fragment>
                <h3>Your Order:</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsList}
                </ul>
                <p>Continue to checkout?</p>
            </Fragment>
        )
    }

    return orderSummary;
}
 
export default OrderSummary;