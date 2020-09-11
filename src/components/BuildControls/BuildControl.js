import React from 'react';
import styled from 'styled-components';

const BuildControlDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`;

const Button = styled.button`
    background-color: ${props => props.type === 'less' ? '#D39952' : '#8F5E1E'};
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
`;

const Label = styled.label`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;

const buildControl = (props) => {
    return(
        <BuildControlDiv>
            <Label>{props.label}</Label>
            <Button type='less' >Less</Button>
            <Button type='more' onClick={props.addIngredient}>More</Button>
        </BuildControlDiv>
        )
    }
    
export default buildControl;