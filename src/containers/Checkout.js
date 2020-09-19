import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';


class Checkout extends Component {
     checkoutCancelHandler = () => {
         this.props.history.replace('/');
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/contact-details');
    }

    render() { 
        // avoid loading the checkout page on startup, when there is no ingredients (no burgerer)
        // which would lead to error (looping through null)
        // doesn't make sense to be on checkout without burger, therefore redirect
        let summary = <Redirect to='/'/>
        if (this.props.ingredients){
            summary = (
                <div>
                    {/* outsourcing checkout summary dodesn't make much sense just now */}
                    <CheckoutSummary ingredients={this.props.ingredients}
                        checkoutCancelHandler={this.checkoutCancelHandler}
                        checkoutContinueHandler={this.checkoutContinueHandler}/>
                </div>
            )
        }
        return summary;
    }
}

const mapStateToProps = state => ({
    ingredients: state.burger.ingredients
})

export default connect(mapStateToProps)(Checkout);