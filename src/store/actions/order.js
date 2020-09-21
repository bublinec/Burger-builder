import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

// purchase
export const purchaseBurgerSuccess = (orderId, order) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        order: {
            ...order,
            id: orderId
        }
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return{
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (order, push, token) => {
    return dispatch => {
        // set loading to true
        dispatch(purchaseBurgerStart());
        // post the order
        axios.post('/orders.json?auth=' + token, order)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, order))
                push('/');
            })
            .catch(error => purchaseBurgerFail(error));
    }
}

// orders list
export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}


export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
}


export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&' + 'equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(res => {
                // transform data object into an array
                const orders = [];
                for(let key in res.data){
                    orders.push({
                        ...(res.data[key]),
                        id: key
                    })
                };
                dispatch(fetchOrdersSuccess(orders));
            })
            .catch(error => {dispatch(fetchOrdersFail(error))});
    }
}