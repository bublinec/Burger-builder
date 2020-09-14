import React, {Component, Fragment} from 'react';
import axios from '../../axios-orders'
import Burger from '../../components/Burger/Burger';
import BuildControlsPanel from '../../components/BuildControls/BuildControlsPanel';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler';
import Spinner from '../../components/UI/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.8
};  

class BurgerBuilder extends Component{
    state = {
        ingredients: null,
        totalPrice: 6,
        purchasing: false,
        loading: false,
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

    continuePurchaseHandler = () => {
        this.setState({loading:true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Peter Lauro',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest',
            error: null,
        }

        axios.post('/orders.json', order)
            .then(response => this.setState({loading:false, purchasing:false}))
            .catch(error => this.setState({loading:false, purchasing:false}))
    }

    componentDidMount = () => {
        axios.get('https://burgerpub-b74df.firebaseio.com/ingredients.json')
        .then(response => {this.setState({ingredients: response.data})})
        .catch(error => {this.setState({error: error})})
    }

    render () {
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        // Assign burger when the ingredients data are fetched, or message when error
        let burger = this.state.error ? <p>Sorry, can't load the ingredients</p> : <Spinner />;
        if(this.state.ingredients){
            burger = (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControlsPanel
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfor={disabledInfo}
                    price={this.state.totalPrice}
                    orderButtonClick={this.showPurchaseModalHandler}/>
            </Fragment>
            );
        };

        return (
            <Fragment>
                <Modal show={this.state.purchasing} hideModal={this.hidePurchaseModalHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients} 
                    hideModal={this.hidePurchaseModalHandler}
                    continuePurchase={this.continuePurchaseHandler}
                    price={this.state.totalPrice}
                    loading={this.state.loading}/>
                </Modal>
                {burger}
            </Fragment>
            )
        }
    }
    
    export default withErrorHandler(BurgerBuilder, axios);