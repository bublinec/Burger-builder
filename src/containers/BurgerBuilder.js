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
// constants
import * as actionTypes from '../store/actions';

class BurgerBuilder extends Component{
    // local state for UI
    state = {
        purchasing: false,
        loading: false,
        error: false
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
        // axios.get('https://burgerpub-b74df.firebaseio.com/ingredients.json')
        // .then(response => {this.setState({ingredients: response.data})})
        // .catch(error => {this.setState({error: error})})
    }

    render () {
        const disabledInfo = {...this.props.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        // I left here the server request for ingredients handling for later
        // Assign burger when the ingredients data are fetched, or message when error
        let burger = this.state.error ? <p>Sorry, can't load the ingredients</p> : <Spinner />;
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
        totalPrice: state.burger.totalPrice
 })

const mapDispatchToProps = dispatch => ({
        addIngredientHandler: (ingType) => dispatch({type: actionTypes.ADD_INGREDIENT, ingType: ingType}),
        removeIngredientHandler: (ingType) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingType: ingType})
})

export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder), axios);