import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    margin: 0;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    align-items: center;
`;

const A = styled.a`
    color: white;
    text-decoration: none;
    width: 100%;
    padding: 16px 10px;
    /* Active tab */
    background-color: ${props => props.active ? '#8F5C2C' : 'none'};
    border-bottom: ${props => props.active ? '4px solid #40A4C8' : 'none'};
    &:hover, &:active{
        background-color: #8F5C2C;
        border-bottom: 4px solid #40A4C8;
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
