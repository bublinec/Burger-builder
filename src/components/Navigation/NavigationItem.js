import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    /* Mobile styles */
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    
    /* Desktop styles */
    @media (min-width: 500px) {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }
`;

const A = styled.a`
    /* Mobile styles */
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    color: ${props => props.active ? '#40A4C8' : '#8F5C2C'};
    &:hover, &:active{
        color: '#40A4C8';
    }

    /* Desktop styles */
    @media (min-width: 500px) {
        color: white;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
        background-color: ${props => props.active ? '#8F5C2C' : 'none'};
        border-bottom: ${props => props.active ? '4px solid #40A4C8' : 'none'};
        &:hover, &:active{
        background-color: #8F5C2C;
        border-bottom: 4px solid #40A4C8;
        }
    }
`;

const navigationItem = (props) => {
    return (
        <Li>
            <A href={props.href} active={props.active}>{props.children}</A>
        </Li>
    );
}
 
export default navigationItem;
