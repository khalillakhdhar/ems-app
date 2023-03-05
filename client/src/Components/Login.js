import React, {useState,useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import {AuthContext} from '../Context/AuthContext';
import styled from 'styled-components';

const StyledOuterDiv = styled.div`
    border: 2px solid #664567;
    background: #aaeeff;
    padding-left: 20px;
`

const StyledButton = styled.button`
    background-color: #008CBA; /* blue */
    border: 2px solid black;
    color: white;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
	// margin: 0 4% 1% 2%;
    cursor: pointer;
    margin-bottom: 20px;
`;

const StyledInput = styled.input`
    width: auto;
    height: auto;
    padding: 0.7% 1.5%;
    margin: 0px 5px 16px 5px;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Login = props => {
    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e => {
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user)
        .then( data => {
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if(isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/');
            }
            else
                setMessage(message);
        });
    }



    return (
        <StyledOuterDiv>
            <form onSubmit={onSubmit}>
                <h3>Please log in</h3>
                <label htmlFor="username">
                    <strong>Username:</strong> 
                </label>
                <StyledInput type="text" 
                       name="username" 
                       onChange={onChange} 
                       placeholder="Enter email"/>
                <br></br>
                <br></br>
                <label htmlFor="password">
                    <strong>Password:</strong> 
                </label>
                <StyledInput type="password" 
                       name="password" 
                       onChange={onChange} 
                       placeholder="Enter Password"/>
                <br></br>
                <br></br>
                <StyledButton type="submit">
                    Log in 
                </StyledButton>
            </form>
            {message ? <Message message={message}/> : null}
        </StyledOuterDiv>
    )
}

export default Login;