import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Route, Link } from 'react-router-dom';
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
    padding: 6px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
`;

const Home = ({component : Component, roles, ...rest}) => {
    const { isAuthenticated, user} = useContext(AuthContext);
    return (
        <StyledOuterDiv>
            <Route {...rest} render={props =>{
            if(isAuthenticated) {
                return (
                    <div>
                        <h1>
                            Welcome {user.username}
                        </h1>
                        <h2> 
                            You are logged in as an {user.role}
                        </h2>
                        <h3>
                            Click below to manage employees(only for admins)!
                        </h3>
                        <Link to = '/employee'>
                            <StyledButton>
                                Click me
                            </StyledButton>       
                        </Link>                        

                    </div>
                )
            } if (!isAuthenticated) {
                return (
                    <div>
                        <h2>
                             You are at the home page
                        </h2>    
                        <h2> 
                            Please Login/Register 
                        </h2>
                        <Link to = '/login'>
                            <StyledButton>
                                Login
                            </StyledButton>       
                        </Link>
                        <Link to = '/register'>
                            <StyledButton style={{ marginLeft : "20px" }}>
                                Register
                            </StyledButton>       
                        </Link>
                    </div>       
                ) 
            }
            }}/> 
        </StyledOuterDiv>
    )
}

export default Home;