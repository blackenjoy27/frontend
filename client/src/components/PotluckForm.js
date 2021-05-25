import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import schema from './validation/Schema'

const initialFormValues = {
    eventName: '',
    date: '',
    time: '',
    state: '',
    city: '',
    streetAddress: '',
    zip: '',
    maxAttendee: '',
}

const initialFormErrors = {
    eventName: '',
    date: '',
    time: '',
    state: '',
    city: '',
    streetAddress: '',
    zip: '',
    maxAttendee: '',
}

const initialDisabled = true

export default function PotluckForm () {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const validate = e => {
        const value = e.target.value;
        yup
        .reach(schema, e.target.name)
        .validate(value)
        .then(valid => {
            setFormErrors({
                ...formErrors,
                [e.target.name]: ''
            })
        })
        .catch(err => {
            setFormErrors({
                ...formErrors,
                [e.target.name]: err.errors[0]
            })
        })
    }

    useEffect(() => {
        schema.isValid(formValues)
        .then(valid => {
        setDisabled(!valid)
        })
        .catch(err =>  {
            console.log(err)
        })
    }, [formValues])

    const inputChange = e => {
        e.persist();
        validate(e);
        const value = e.target.value;
        setFormValues({ ...formValues, [e.target.name]: value })
    }

    const formSubmit = e => {
        e.preventDefault();
        console.log(formSubmit, 'Submitted')
        // axios
        // .post("", formValues)
        // .then(response => {
        //     const apiReturn = response.data
        //     console.log(response.data)
        //     setUsers([...users, apiReturn])
        //     setFormValues(formValues)
        // })
        // .catch(err => console.log(err));
    };


    return (
        <div>
        <form onSubmit={formSubmit}>
        <label htmlFor ='eventName'>
            <h2>Event Name</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='eventName'
                id='eventName'
                placeholder='Must have at least 3 characters'
                value={formValues.eventName}
                onChange={inputChange}
            />
        </label>
        <label htmlFor ='date'>
            <h2>Date</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='date'
                id='date'
                placeholder='Date'
                value={formValues.date}
                onChange={inputChange}
            />
        </label>
        <label htmlFor ='time'>
            <h2>Time</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='time'
                id='time'
                placeholder='Time'
                value={formValues.time}
                onChange={inputChange}
            />
        </label>
        <label htmlFor ='state'>
            <h2>State</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='state'
                id='state'
                placeholder='Must have at least 2 characters'
                value={formValues.state}
                onChange={inputChange}
            />
        </label>
        <label htmlFor ='city'>
            <h2>City</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='city'
                id='city'
                placeholder='Must have at least 2 characters'
                value={formValues.city}
                onChange={inputChange}
            />
        </label>
        <label htmlFor ='zip'>
            <h2>Zip</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='zip'
                id='zip'
                placeholder='Must have at least 5 characters'
                value={formValues.zip}
                onChange={inputChange}
            />
        </label>
        <label htmlFor ='streetAddress'>
            <h2>Street Address</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='streetAddress'
                id='streetAddress'
                placeholder='Address'
                value={formValues.streetAddress}
                onChange={inputChange}
            />
        </label>
        <label htmlFor ='maxAttendee'>
            <h2>Max Attendees</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='maxAttendee'
                id='maxAttendee'
                placeholder='Must have at least 2 characters'
                value={formValues.maxAttendee}
                onChange={inputChange}
            />
        </label>
            <div className ='submit'>
                <button disabled={disabled}>Create Potluck</button>
            </div>
            </form >
        </div >
    )
}