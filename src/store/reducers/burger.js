import * as actionTypes from '../actions/actionTypes';
import { updateObject, countObjectValues } from '../../shared/utilities';

// outsource maybe? 
const INGREDIENT_PRICES = {
    bread: 3,
    meat: 1.3,
    bacon: 0.8,
    salad: 0.5,
    cheese: 0.4
};

const initialPrice = countObjectValues(INGREDIENT_PRICES);

const initialState = {
    ingredients: null,
    totalPrice: initialPrice,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {         
        case actionTypes.ADD_INGREDIENT: 
            return updateObject(state, 
                {ingredients: updateObject(state.ingredients, 
                    {[action.ingType]: state.ingredients[action.ingType] + 1}),
                totalPrice: (state.totalPrice += INGREDIENT_PRICES[action.ingType])})
        case actionTypes.REMOVE_INGREDIENT:
            return updateObject(state, 
                {ingredients: updateObject(state.ingredients, 
                    {[action.ingType]: state.ingredients[action.ingType] - 1}),
                totalPrice: (state.totalPrice -= INGREDIENT_PRICES[action.ingType])});
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.ingredients,
                totalPrice: initialPrice,
                error: false});
        case actionTypes.FETCH_INGREDIENTS_FAIL:
            return updateObject(state, {error: true});
        default:
            return state;
    }
}
 
export default reducer;