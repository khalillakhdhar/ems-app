import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
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

const StyledInput = styled.input`
    width: auto;
    height: auto;
    padding: 0.7% 1.5%;
    margin: 0px 5px 16px 5px;
    display: inline-block;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Register = props => {
    const [user,setUser] = useState({username: "", password : "", role : ""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect( () => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = e => {
        setUser({...user,[e.target.name] : e.target.value});
    }

    const resetForm = () => {
        setUser({username : "", password : "",role : ""});
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.register(user)
        .then( data => {
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError) {
                timerID = setTimeout(()=>{
                    props.history.push('/login');
                }, 1000)
            }
        });
    }



    return (
        <StyledOuterDiv>
            <form onSubmit={onSubmit}>
                <h3>Please Register</h3>
                <label htmlFor="username"><strong>Username: </strong></label>
                <StyledInput type="text" 
                       name="username" 
                       value={user.username}
                       onChange={onChange} 
                       placeholder="Enter email"/>
                <br></br>
                <br></br>
                <label htmlFor="password" ><strong>Password: </strong></label>
                <StyledInput type="password" 
                       name="password"
                       value={user.password} 
                       onChange={onChange} 
                       placeholder="Enter Password"/>
                <br></br>
                <br></br>
                <label htmlFor="role"><strong>Role: </strong></label>
                <StyledInput type="text" 
                       name="role"
                       value={user.role}  
                       onChange={onChange}  
                       placeholder="Enter role (admin/user)"/>
                <br></br>
                <br></br>
                <StyledButton >
                    Register
                </StyledButton>
            </form>
            {message ? <Message message={message}/> : null}
        </StyledOuterDiv>
    )
}

export default Register;