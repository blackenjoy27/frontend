import React from "react";


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
    )
}