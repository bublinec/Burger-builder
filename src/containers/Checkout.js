import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import ContactDetails from '../components/Checkout/ContactDetails';


class Checkout extends Component {
     checkoutCancelHandler = () => {
         this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-details');
    }

    render() { 
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ingredients}
                                 checkoutCancelHandler={this.checkoutCancelHandler}
                                 checkoutContinueHandler={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path + '/contact-details'} component={ContactDetails}/>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    ingredients: state.burger.ingredients
})

export default connect(mapStateToProps)(Checkout);