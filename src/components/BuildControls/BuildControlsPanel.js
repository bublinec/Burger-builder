import React from 'react';
import styled from 'styled-components';
import BuildControl from './BuildControl'

const BuildControlsDiv = styled.div`
width: 100%;
background-color: #CF8F2E;
display: flex;
flex-flow: column;
align-items: center;
box-shadow: 0 2px 1px #ccc;
margin: auto;
padding: 10px 0;
`;

const OrderButton = styled.button`
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    margin: 40px;
    box-shadow: 2px 2px 2px #966909;
    :hover, :active {
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }
`;

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];
const buildControls = (props) => {
    return(
        <BuildControlsDiv>
            <h2>Price {props.price.toFixed(2)}$</h2>
            {/* Render Controls */}
            {controls.map(ctrl => (
                <BuildControl
                key={ctrl.label}
                label={ctrl.label} 
                type={ctrl.type}
                addIngredient={() => props.addIngredient(ctrl.type)}
                removeIngredient={() => props.removeIngredient(ctrl.type)} 
                disabled={props.disabledInfo[ctrl.type]}/>
                ))}
            <OrderButton onClick={props.orderButtonClick}>{props.isAuthenticated ? 'ORDER' : 'SIGN UP TO ORDER'}</OrderButton>
        </BuildControlsDiv>
    )
}
        
export default buildControls;