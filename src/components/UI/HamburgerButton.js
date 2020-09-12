import React from 'react';
import styled from 'styled-components';

const HamburgerBarDiv = styled.div`
    width: 30px;
    height: 4px;
    background-color: white;
    margin: 5px 0;
    border-radius: 5px;
`;

const hamburgerButton = (props) => {
    return (
        <div onClick={props.onClick}>
            <HamburgerBarDiv />
            <HamburgerBarDiv />
            <HamburgerBarDiv />
        </div>
    );
};
 
export default hamburgerButton;