import * as actionTypes from '../actions';

// outsource maybe? 
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.8
};

const initialState = {
    ingredients: {
        meat: 1,
        cheese: 1,
        salad: 1,
        bacon: 1
    },
    totalPrice: 6,
}

const reducer = (state = initialState, action) => {
    // deep copy state
    const newState = {
        ...state,
        ingredients: {
            ...state.ingredients,
        }
    }

    switch (action.type) {         
        case actionTypes.ADD_INGREDIENT:
            newState.ingredients[action.ingType] += 1;
            newState.totalPrice += INGREDIENT_PRICES[action.ingType];
            return newState;

        case actionTypes.REMOVE_INGREDIENT:
            newState.ingredients[action.ingType] -= 1;
            newState.totalPrice -= INGREDIENT_PRICES[action.ingType];
            return newState;
            
        default:
            return state
    }
}
 
export default reducer;