import React from 'react';
import styled from 'styled-components';

const themes = {
    success: '#5C9210',
    danger: '#800020'
}

const StyledButton = styled.button`
    background-color: transparent;
    border: solid 2px ${props => props.type};
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;

    color: ${props => props.type};

    &:first-of-type {
        margin-left: 0;
    }
`;

const Button = (props) => {
    return (
        <StyledButton type={themes[props.type]} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
}
 
export default Button;