import React from 'react';
import Ingredients from './StyledComponents/BurgerIngredients';
import BurgerDiv from './StyledComponents/BurgerDiv';

const burger = (props) => {
    return(
        <BurgerDiv>
            <Ingredients.breadTop />
            <Ingredients.salad/>
            <Ingredients.cheese/>
            <Ingredients.meat/>
            <Ingredients.breadBottom/>  
        </BurgerDiv>
        
        )
    };
    
    export default burger;