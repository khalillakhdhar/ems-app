import React from 'react';
import styled from 'styled-components';

const StyledButtonOne = styled.button`
    background-color: #008CBA; /* blue */
    border: 2px solid black;
    color: white;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
	cursor: pointer;
`;

const StyledButtonTwo = styled.button`
    background-color: #994444; /* Red */
    border: 2px solid black;
    color: white;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
	cursor: pointer;
`;

const EmployeeTableRow = (props) => {
    const {Name, email, salary, _id} = props.employee;
    return (
            <tr>
                <td>{Name}</td>
                <td>{email}</td>
                <td>{salary}</td>
                <td>
                    <StyledButtonOne style={{ marginLeft : "20px" }} onClick={props.showEditForm.bind(this,props.employee)}>
                        Edit
                    </StyledButtonOne>
                    <StyledButtonTwo style={{ marginLeft : "10px" }} onClick={props.deleteHandler.bind(this,_id)}>
                        Delete
                    </StyledButtonTwo>
                </td>    
            </tr>
    )
}

export default EmployeeTableRow;