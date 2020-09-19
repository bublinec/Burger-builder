import * as actionTypes from '../actions/actionTypes';

// saving also error, although not using it (can be useful in the future)
const initialState = { 
    orders: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    let newState = {
        ...state
    }

    switch (action.type) {
        // purchase
        case actionTypes.PURCHASE_BURGER_START:
            newState.loading = true;
            break;
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            newState.loading = false;
            newState.orders = state.orders.concat(action.order)
            break;
        case actionTypes.PURCHASE_BURGER_FAIL:
            newState.loading = false;
            newState.error = action.error;
            break;
        // orders list
        case actionTypes.FETCH_ORDERS_START:
            newState.loading = true
            break;
        case actionTypes.FETCH_ORDERS_SUCCESS:
            newState.loading = false;
            newState.orders = action.orders;
            break;
        case actionTypes.FETCH_ORDERS_FAIL:
            newState.loading = false;
            newState.error = action.error;
            break;
        default:
            break;
    }
    return newState;
}

export default reducer;