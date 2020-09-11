import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControlsPanel'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.8
};  

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        },
        totalPrice: 6
    }

    addIngredientHandler = (type) => {
        const newState = {...this.state}
        newState.ingredients[type] += 1;
        newState.totalPrice += INGREDIENT_PRICES[type];
        this.setState(newState);        
    }

    render () {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientHandler}/>
            </Fragment>
            )
        }
    }
    
    export default BurgerBuilder;