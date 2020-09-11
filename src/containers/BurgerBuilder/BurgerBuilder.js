import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControlsPanel from '../../components/BuildControls/BuildControlsPanel';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
        totalPrice: 6,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const newState = {...this.state}
        newState.ingredients[type] += 1;
        newState.totalPrice += INGREDIENT_PRICES[type];
        this.setState(newState);        
    }

    removeIngredientHandler = (type) => {
        const newState = {...this.state}
        // prevent from negative ingredients count
        if(newState.ingredients[type] <= 0){
            return
        }
        newState.ingredients[type] -= 1;
        newState.totalPrice -= INGREDIENT_PRICES[type];
        this.setState(newState);        
    }

    showPurchaseModalHandler = () => {
        this.setState({purchasing: true})
    }

    hidePurchaseModalHandler = () => {
        this.setState({purchasing: false})
    }

    render () {
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Fragment>
                <Modal show={this.state.purchasing} hideModal={this.hidePurchaseModalHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControlsPanel 
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfor={disabledInfo}
                    price={this.state.totalPrice}
                    orderButtonClick={this.showPurchaseModalHandler}/>
            </Fragment>
            )
        }
    }
    
    export default BurgerBuilder;