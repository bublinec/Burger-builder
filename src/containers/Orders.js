import React, {Component} from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../hoc/withErrorHandler';
import axios from '../axios-orders';
import Order from '../components/Order/Order';
import Spinner from '../components/UI/Spinner';
import * as actions from '../store/actions/index';


class Orders extends Component {
    // orders are stored in the redux store
    // althought it doesn't really matter as they are fetched every time anyways
    // but it's a good practice

    componentDidMount() {
        this.props.fetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading){
            orders = ( 
                <div>
                    {this.props.orders.map(order => (
                            <Order 
                                key={order.id}
                                ingredients={order.ingredients}
                                price={order.price}/>
                    ))}
                </div>
             );
        }
        return orders
    }
}

const mapStateToProps = state => ({
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
});

const mapDispatchToProps = dispatch => ({
    fetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));