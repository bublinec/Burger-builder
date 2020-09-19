import * as actionTypes from '../actions/actionTypes';

// outsource maybe? 
const INGREDIENT_PRICES = {
    bread: 3,
    meat: 1.3,
    bacon: 0.8,
    salad: 0.5,
    cheese: 0.4
};

const getInitialPrice = (INGREDIENT_PRICES) => {
    let initialPrice = 0;
    for( let key in INGREDIENT_PRICES){
        initialPrice += INGREDIENT_PRICES[key]
    }
    return initialPrice
}

const initialPrice = getInitialPrice(INGREDIENT_PRICES);

const initialState = {
    ingredients: null,
    totalPrice: initialPrice,
    error: false
}

const reducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {         
        case actionTypes.ADD_INGREDIENT: {
            let newIngs= {...newState.ingredients }
            newIngs[action.ingType] += 1;
            newState.ingredients = newIngs;
            newState.totalPrice += INGREDIENT_PRICES[action.ingType];
            return newState;
        }
            
        case actionTypes.REMOVE_INGREDIENT: {
            let newIngs= {...newState.ingredients}
            newIngs[action.ingType] -= 1;
            newState.ingredients = newIngs;
            newState.totalPrice -= INGREDIENT_PRICES[action.ingType];
            return newState;
        }

        case actionTypes.SET_INGREDIENTS:
            newState.ingredients = action.ingredients;
            newState.totalPrice = initialPrice;
            newState.error = false;
            return newState;
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            newState.error = true;
            return newState
        default:
            return newState;
    }
}
 
export default reducer;