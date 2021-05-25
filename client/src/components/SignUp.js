import React, { useState, useEffect } from "react";
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
    const [values, setValues] = useState(initialValues);
    const [formValues, setFormValues] = useState(null);

    useEffect(() => {
        console.log(values);
      }, [values]);

    const onSubmit = event => {
        event.preventDefault()
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

    return (
        <FormDiv>
            <form id = 'signup-form'>
                <div className = 'form-group submit'>
                    <h3>Sign up to join a Potluck, or host your own!</h3>
                </div>

                <div className = 'form-group inputs' onSubmit={onSubmit}>
                    <label><h3>Username</h3>
                        <input id = 'username-input'
                            value = {values.username}
                            onChange = {onChange}
                            name = 'username'
                            type = 'text'
                        />
                    </label>

                    <label><h3>Email</h3>
                        <input id = 'email-input'
                            value = {values.email}
                            onChange = {onChange}
                            name = 'email'
                            type = 'text'
                        />
                    </label>

                    <label><h3>Password</h3>
                        <input id = 'password-input'
                            value = {values.password}
                            onChange = {onChange}
                            name = 'password'
                            type = 'text'
                        />
                    </label>
                </div>

                <div className = 'form-group checkboxes'>
                    <label><h3>Accept Terms of Service</h3>
                        <input id = 'terms-of-service check'
                            type = 'checkbox'
                            name = 'pepperoni'
                            checked = {values.termsOfService}
                            onChange = {onChange}
                        />
                    </label>
                </div>

                <button>Create an Account</button>
            </form>
        </FormDiv>
    )
}