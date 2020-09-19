import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addIngredient = (ingType) => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingType: ingType}
}

export const removeIngredient = (ingType) => {
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingType: ingType}
}


// INITIALIZE INGREDIENTS
export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    // syntax avalaible due to redux-thunk
    // take the dispatch function as an argument, stop it, 
    // fetch the data, call the dispatch once the response is resolved
    // alternatively, the data could be also fetch in componentDidMount()
    return dispatch => {
        axios.get('https://burgerpub-b74df.firebaseio.com/ingredients.json')
            .then(response => {dispatch(setIngredients(response.data))})
            .catch(error => {dispatch(fetchIngredientsFailed())})
    }
}