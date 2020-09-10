import React from 'react';
import Ingredient from './StyledComponents/IngredientDiv';
import BurgerDiv from './StyledComponents/BurgerDiv';

const burger = (props) => {

    // map ingredients object to an array of ingredient components
    const ingredientsComponents = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <Ingredient key={igKey + i} type={igKey} />
            });
        });

    return(
        <BurgerDiv>
            <Ingredient type="breadTop"/>
            {ingredientsComponents}
            <Ingredient type="breadBottom"/>
        </BurgerDiv>
        
        )
    };
    
    export default burger;