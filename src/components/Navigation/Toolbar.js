import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems';
import HamburgerButton from '../UI/HamburgerButton';

const ToolbarHeader = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703B09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`;

const DesktopOnlyDiv = styled.div`
    @media (max-width: 499px){
        display: none;
    }
`;

const MobileOnlyDiv = styled.div`
    @media (min-width: 500px){
        display: none;
    }
`;

const toolbar = (props) => {
    return (
        <ToolbarHeader>
            <Logo height="50%"></Logo>
            <DesktopOnlyDiv>
                <NavigationItems />
            </DesktopOnlyDiv>
            <MobileOnlyDiv>
                <HamburgerButton onClick={props.showSideDrawer}/>
            </MobileOnlyDiv>
        </ToolbarHeader>
    );
}
 
export default toolbar;