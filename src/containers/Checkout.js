import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import ContactDetails from '../components/Checkout/ContactDetails';


class Checkout extends Component {
    state = { 
        ingredients: {
            salad: 1 
        }
     }

     componentDidMount() {
         this.setState({ingredients: this.props.location.ingredients})
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
                <Route path={this.props.match.path + '/contact-details'} component={ContactDetails}/>
            
            </div>
            );
    }
}
 
export default Checkout;