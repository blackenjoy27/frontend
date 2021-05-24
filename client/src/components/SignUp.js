import React from "react";
import styled from 'styled-components'

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

export default function SignUp(props) {
    const {
        values,
        submit,
        change,
        errors,
        disabled
    } = props
    
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <FormDiv>
            <form id = 'signup-form'>
                <div className = 'form-group submit'>
                    <h3>Sign up to join a Potluck, or host your own!</h3>

                    <div className = 'errors'>
                        <div>{errors.username}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.termsOfService}</div>
                    </div>
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

                <button disabled = {disabled}>Create an Account</button>
            </form>
        </FormDiv>
    )
}