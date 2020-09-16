import React from 'react';
import styled from 'styled-components';

const themes = {
    success: '#5C9210',
    danger: '#800020'
}

const StyledButton = styled.button`
    background-color: transparent;
    border: solid 2px ${props => props.disabled ? 'grey' : props.type};
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    ${props => props.disabled ? 'cursor: not-allowed' : ''};
    color: ${props => props.disabled ? 'grey' : props.type};

    &:first-of-type {
        margin-left: 0;
    }
`;

const Button = (props) => {
    return (
        <StyledButton type={themes[props.type]} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </StyledButton>
    );
}
 
export default Button;