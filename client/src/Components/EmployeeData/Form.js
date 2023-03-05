import React from 'react';
import Input from './Input';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #008CBA; /* Blue */
    border: 2px solid black;
    color: white;
    padding: 5px 9px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
	margin: 0 4% 1% 2%;
	cursor: pointer;
`;

const Form = (props) => {
    return(
        <form onSubmit={props.handler}>
            <h4 style={{ "marginLeft" : "20px" }}>
                {props.isEditForm ? "Editing Employee: " : "Add Employee: "}
            </h4>
            <div style={{ "marginLeft" : "20px" }}>
                <Input name="Name"
                       placeholder="Enter Name"
                       labelName="Name: "
                       handleChange={props.handleChange}
                       value={props.employee.Name}/>
                <br></br>
                <Input name="email"
                       placeholder="Enter email"
                       labelName="email: "
                       handleChange={props.handleChange}
                       value={props.employee.email}/>
                <br></br>
                <Input name="salary"
                        placeholder="Enter Salary"
                        labelName="Salary: "
                        handleChange={props.handleChange}
                        value={props.employee.salary}/>
            </div>
            <StyledButton style={{ "marginBottom" : "20px" }} type="submit">
                Submit
            </StyledButton>
        </form> 
    )
}

export default Form;