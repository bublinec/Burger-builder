import React, { Fragment } from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop'

const SideDrawerDiv = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    /* Show/hide sideDrawer with animation*/
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    @media (min-width: 500px) {
        display: none;
    }
`;

const sideDrawer = (props) => {
    return (
        <Fragment>
            <Backdrop show={props.show} onClick={props.hideSideDrawer}/>
            <SideDrawerDiv show={props.show}>
                <Logo height="6%"/>
                <NavigationItems isAuthenticated={props.isAuthenticated}/>
            </SideDrawerDiv>
        </Fragment>

    );
}
 
export default sideDrawer;