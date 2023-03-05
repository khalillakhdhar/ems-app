import React from 'react';
import EmployeeTableRow from './EmployeeTableRow';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-left: 20px;
`

const EmployeeTable = (props) => {
    return (
        <>
            <StyledDiv>
                <h2>Employees</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employees.map(employee=>{
                            return <EmployeeTableRow key={employee._id}
                                                    employee={employee}
                                                    deleteHandler={props.deleteHandler}
                                                    showEditForm={props.showEditForm}/>
                        })}
                    </tbody>
                </table>
            </StyledDiv>
        </>
        
    )
}

export default EmployeeTable;