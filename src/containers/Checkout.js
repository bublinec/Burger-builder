import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import ContactDetails from '../components/Checkout/ContactDetails';


class Checkout extends Component {
    state = { 
        ingredients: {
            salad: 1 
        },
        totalPrice: 0
     }

     UNSAFE_componentWillMount() {
         this.setState({
            ingredients: this.props.location.ingredients,
            totalPrice: this.props.location.totalPrice
            })
     }

     checkoutCancelHandler = () => {
         this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace({
            pathname :'/checkout/contact-details',
            ingredients: this.props.location.ingredients});
    }

    render() { 
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                checkoutCancelHandler={this.checkoutCancelHandler}
                                checkoutContinueHandler={this.checkoutContinueHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-details'} 
                    render={(props) => (<ContactDetails 
                                        ingredients={this.state.ingredients}
                                        totalPrice={this.state.totalPrice}
                                        {...props}/>)
                    }/>
            
            </div>
            );
    }
}
 
export default Checkout;