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

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAIL
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burgerpub-b74df.firebaseio.com/ingredients.json')
            .then(response => {dispatch(setIngredients(response.data))})
            .catch(error => {dispatch(fetchIngredientsFailed())})
    }
}