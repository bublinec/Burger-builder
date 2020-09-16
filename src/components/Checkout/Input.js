import React from 'react';
import styled from 'styled-components';

const InputDiv = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const GeneralInputElementStyle = `
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    &:focus {
        outline: none;
        background-color: #ccc;
    }
`;

const Input = styled.input`
    ${GeneralInputElementStyle}
    background-color: ${props => props.invalid ? '#FFCCCB' : 'white'};
`;

const Textarea = styled.textarea`
    ${GeneralInputElementStyle}
    background-color: ${props => props.invalid ? '#FFCCCB' : 'white'};
`;

const Select = styled.select`
    ${GeneralInputElementStyle}
`;

// TO DO: pass some validation message

const input = (props) => {
    let inputElement;
    switch (props.elementType) {
        case ('textarea'):
            inputElement = <Textarea 
                {...props.elementConfig} 
                value={props.value} 
                onChange={(event) => props.changed(event, props.id)}
                invalid={props.invalid}/>;
            break;
        case ('select'):
            inputElement = (
                <Select 
                value={props.elementConfig.value} 
                onChange={(event) => props.changed(event, props.id)}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </Select>
            )
            break;
        default:
            inputElement = <Input 
                {...props.elementConfig} 
                value={props.value} 
                onChange={(event) => props.changed(event, props.id)}
                invalid={props.invalid}/>
    }

    return ( 
        <InputDiv>
            <label>{props.label}</label>
            {inputElement}
        </InputDiv>
     );
}
 
export default input;