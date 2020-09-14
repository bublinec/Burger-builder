import React, { Fragment } from 'react';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';

const OrderSummary = (props) => {
    let orderSummary = <Spinner />

    // If ingredients are fetched, or if loading is false (when posting the order)
    if(props.ingredients || !props.loading){
        
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

        // If there are no ingredients added
        if(ingredientsList.length <= 0){
            orderSummary = <h3>Do you really want to eat just a stale bread?</h3>    
        }else{
            orderSummary = (
                <Fragment>
                    <h2>Your Order:</h2>
                    <p>A delicious burger with the following ingredients:</p>
                    <ul>
                        {ingredientsList}
                    </ul>
                    <h3>Price: {props.price.toFixed(2)} $</h3>
                    <p>Continue to checkout?</p>
                    <Button type='danger' onClick={props.hideModal}>CANCEL</Button>
                    <Button type='success' onClick={props.continuePurchase}>CONTINUE</Button>
                </Fragment>
            )
        }
    }
    
    return orderSummary;
}
 
export default OrderSummary;