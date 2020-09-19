import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';


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

export const purchaseBurger = (order, push) => {
    return dispatch => {
        // set loading to true
        dispatch(purchaseBurgerStart());
        // post the order
        axios.post('/orders.json', order)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, order))
                push('/');
            })
            .catch(error => purchaseBurgerFail(error));
    }
}
