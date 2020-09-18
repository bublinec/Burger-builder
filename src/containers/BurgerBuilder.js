// packages
import React, { Component, Fragment } from 'react';
import axios from '../axios-orders';
import { connect } from 'react-redux';
// components
import Burger from '../components/Burger/Burger';
import BuildControlsPanel from '../components/BuildControls/BuildControlsPanel';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Order/OrderSummary';
import withErrorHandler from '../hoc/withErrorHandler';
import Spinner from '../components/UI/Spinner';
// actions
import * as actions from '../store/actions/index';

class BurgerBuilder extends Component{
    // local state for UI
    state = {
        purchasing: false,
        loading: false
    }

    showPurchaseModalHandler = () => {
        this.setState({purchasing: true})
    }

    hidePurchaseModalHandler = () => {
        this.setState({purchasing: false})
    }

    continuePurchaseHandler = () => {
        this.props.history.replace('checkout');
    }

    componentDidMount = () => {
        this.props.initIngredients();
    }

    render () {
        // disabledInfo for buttons
        const disabledInfo = {...this.props.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // let burger be an error message, assign the burger component otherwise
        let burger = this.props.error ? <p>Sorry, can't load the ingredients</p> : <Spinner />;
        if(this.props.ingredients){
            burger = (
            <Fragment>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControlsPanel
                    addIngredient={this.props.addIngredientHandler}
                    removeIngredient={this.props.removeIngredientHandler}
                    price={this.props.totalPrice}
                    disabledInfo={disabledInfo}
                    orderButtonClick={this.showPurchaseModalHandler}/>
            </Fragment>
            );
        };

        return (
            <Fragment>
                <Modal show={this.state.purchasing} hideModal={this.hidePurchaseModalHandler}>
                    <OrderSummary 
                    ingredients={this.props.ingredients} 
                    hideModal={this.hidePurchaseModalHandler}
                    continuePurchase={this.continuePurchaseHandler}
                    price={this.props.totalPrice}
                    loading={this.state.loading}/>
                </Modal>
                {burger}
            </Fragment>
            )
        }
}

const mapStateToProps = state => ({
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        error: state.burger.error,
 })

const mapDispatchToProps = dispatch => ({
        addIngredientHandler: (ingType) => dispatch(actions.addIngredient(ingType)),
        removeIngredientHandler: (ingType) => dispatch(actions.removeIngredient(ingType)),
        initIngredients: () => dispatch(actions.initIngredients()) 
})

export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder), axios);