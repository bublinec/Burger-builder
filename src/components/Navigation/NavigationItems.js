import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem'

const NavigationItemsUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
`;

const navigationItems = (props) => {
    return (
        <NavigationItemsUl>
            <NavigationItem href='/' active>Builder</NavigationItem>
            <NavigationItem href='/'>Checkout</NavigationItem>
            <NavigationItem href='/'>About</NavigationItem>
        </NavigationItemsUl>
    );
}
 
export default navigationItems;