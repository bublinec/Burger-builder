import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem'

const NavigationItemsUl = styled.ul`
    margin: 35px 0 0 8px;
    padding: 0;
    list-style: none;
    align-items: center;
    height: 100%;
    @media (min-width: 500px){
        display: flex;
        margin: 0;
    }
`;

const navigationItems = (props) => {
    return (
        <NavigationItemsUl>
            <NavigationItem href='/builder' active>Builder</NavigationItem>
            <NavigationItem href='/checkout'>Checkout</NavigationItem>
            <NavigationItem href='/about'>About</NavigationItem>
        </NavigationItemsUl>
    );
}
 
export default navigationItems;