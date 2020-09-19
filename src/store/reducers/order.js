import * as actionTypes from '../actions/actionTypes';

// saving also error, although not using it (can be useful in the future)
const initialState = { 
    orders: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // purchase
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(action.order)
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        // orders list
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return{
                ...state,
                loading: false,
                orders: action.orders
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;