import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: auto;
    height: auto;
    padding: 0.7% 1.5%;
    margin: 0px 5px 16px 5px;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Input = (props) => {
    return (
        <>
            <label htmlFor={props.name}> <strong> {props.labelName} </strong> </label>
            <StyledInput type="text"
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                value={props.value}>    
            </StyledInput>
        </>
    )
}

export default Input;