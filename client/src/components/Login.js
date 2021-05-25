import React, {useState} from "react";
import styled from "styled-components";
import {Link, useHistory} from "react-router-dom";

import {login} from "../actions";
import {connect} from "react-redux";


const initialUserValue = {
    username:"",
    password:""
}

const FormDiv = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:4rem auto;
    border: 2px solid silver;
    width:50%;
    padding-top:2rem;
    padding-bottom:4rem;
    border-radius:5px;
    

`

const LoginForm = styled.form`
    display:flex;
    flex-direction:column;
    margin:2rem auto;
    

    input{
        margin-bottom:1rem;
    }
`

const Login = (props)=>{
    const [user, setUser] = useState(initialUserValue);
    const {push} = useHistory();

    const updateLoginForm = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault();
        props.dispatch(login(user)).then(res=>{
            push("/protected");
        });
        // push("/protected");

        setUser(initialUserValue);
    }

    return(
        <div>
            <header>
                <a className="logo">
                    <strong>Forty</strong>
                    <span>by HTML5 UP</span>
                </a>
                <Link to="/">Home</Link>
                <Link to="/sign-up">Sign Up</Link>
            </header>
            <FormDiv>
                <h1>Welcome Back</h1>
                <LoginForm onSubmit={submit}>
                    <input
                        name="username"
                        value={user.username}
                        placeholder="Username"
                        onChange={updateLoginForm}
                    />
                    <input
                        name="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={updateLoginForm}
                    />
                    <button>Login</button>
                </LoginForm>
            </FormDiv>
        </div>
    )
}


export default connect()(Login);