import React from 'react';
import styled from 'styled-components';
import Ingredient from './IngredientStyling';

const BurgerContainer = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: auto;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

@media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
}

@media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
}

@media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
}
`;

const burger = (props) => {

    // map ingredients object to an array of ingredient components
    const ingredientsComponents = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <Ingredient key={igKey + i} type={igKey} />
            });
        });

    return(
        <BurgerContainer>
            <Ingredient type="breadTop"/>
            {ingredientsComponents}
            <Ingredient type="breadBottom"/>
        </BurgerContainer>
        
        )
    };
    
    export default burger;