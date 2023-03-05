import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import styled from 'styled-components';

const TopNav = styled.div`
    overflow: hidden;
    background-color: #000;
`

const Styledli = styled.li`
    float: left;
    list-style-type: none;
    color: #fff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
`

const StyledButton = styled.button`
    background-color: #008CBA; /* blue */
    border: 2px solid black;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    // margin: 0 4% 1% 2%;
    cursor: pointer;
`
 
const Navbar = props => {
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = () => {
        AuthService.logout().then(data=> {
            if(data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = () => {
        return (
            <>  
                <Link to="/login">
                    <Styledli>
                        Login
                    </Styledli>
                </Link>  
                <Link to="/register">
                    <Styledli>
                        Register
                    </Styledli>
                </Link>  
            </>
        )
    }

    const authenticatedNavBar = () => {
        return (
            <>  
                {
                    user.role === "admin" ? 
                    <Link to="/admin">
                        <Styledli className="nav-item nav-link">
                            Admin
                        </Styledli>
                    </Link> : null
                }  
                {
                    user.role === "admin" ? 
                    <Link to="/employee">
                        <Styledli className="nav-item nav-link">
                            Employee
                        </Styledli>
                    </Link> : null
                }
                <Styledli>
                    <StyledButton type="button" 
                        onClick={onClickLogoutHandler}>
                        Logout
                    </StyledButton>
                </Styledli>  
            </>
        )
    }
    return (
        <TopNav>
            <Link to="/">
                <Styledli>
                    <div>
                        Home
                    </div>
                </Styledli>
            </Link>
            <div>
                <div>
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </div>
            </div>
        </TopNav>
    )
}

export default Navbar;