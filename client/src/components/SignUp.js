import axios from "axios";
import React, { useState} from "react";
import {useHistory} from "react-router-dom";
import styled from 'styled-components'

const FormDiv = styled.div`
    background-image: url('https://hips.hearstapps.com/ell.h-cdn.co/assets/15/52/1450738482-elle-potluck-04-getty.jpg');
    background-repeat: no-repeat;
    background-position: bottom; 
    background-size: cover;
    color: white;
    padding: 15%;
`

const initialValues = {
    username: "",
    password: "",
    email: ""
  };

export default function SignUp() {
    const [newUser, setNewUser] = useState(initialValues);
    const {push} = useHistory();
  

    const onSubmit = event => {
        event.preventDefault();
        console.log(newUser);
        axios.post("https://theonewhoknocks.herokuapp.com/api/auth/register", newUser)
        .then(res=>{
            console.log(res.data);
            push("/login");
        })

    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
      };

    return (
        <FormDiv>
            <div className = 'form-group submit'>
                    <h3>Sign up to join a Potluck, or host your own!</h3>
            </div>
            <form id = 'signup-form' onSubmit={onSubmit}>
                

                <div className = 'form-group inputs' >
                    <label><h3>Username</h3>
                        <input id = 'username-input'
                            value = {newUser.username}
                            onChange = {onChange}
                            name = 'username'
                            type = 'text'
                        />
                    </label>

                    <label><h3>Email</h3>
                        <input id = 'email-input'
                            value = {newUser.email}
                            onChange = {onChange}
                            name = 'email'
                            type = 'text'
                        />
                    </label>

                    <label><h3>Password</h3>
                        <input id = 'password-input'
                            value = {newUser.password}
                            onChange = {onChange}
                            name = 'password'
                            type = 'text'
                        />
                    </label>
                    {/* <label><h3>Accept Terms of Service</h3>
                        <input id = 'terms-of-service check'
                            type = 'checkbox'
                            // name = 'pepperoni'
                            checked = {newUser.termsOfService}
                            onChange = {onChange}
                        />
                    </label> */}
                </div>

                <button>Create an Account</button>
            </form>
        </FormDiv>
    )
}