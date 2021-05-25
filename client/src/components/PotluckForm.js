import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as yup from 'yup';
import schema from './validation/Schema'
import {addEvent} from "../actions";

const initialFormValues = {
    event_name: 'Poker',
    date: "12-12-21",
    time: "12:00",
    state: 'NY',
    city: 'Queen',
    street_address: '40-35 Sanford',
    zip: 11445,
    max_attendee: 10,
}

const initialFormErrors = {
    event_name: '',
    date: '',
    time: '',
    state: '',
    city: '',
    street_address: '',
    zip: '',
    max_attendee: '',
}

const initialDisabled = true

const PotluckForm = (props) => {
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
        
        // axios
        // .post("", formValues)
        // .then(response => {
        //     const apiReturn = response.data
        //     console.log(response.data)
        //     setUsers([...users, apiReturn])
        //     setFormValues(formValues)
        // })
        // .catch(err => console.log(err));
        const newEvent = {...formValues, user_id: props.user_id}
        console.log(newEvent);
        console.log(typeof newEvent.user_id);
        props.dispatch(addEvent(newEvent));
    };


    return (
        <div>
        <form onSubmit={formSubmit}>
        <label htmlFor ='event_name'>
            <h2>Event Name</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='event_name'
                id='event_name'
                placeholder='Must have at least 3 characters'
                value={formValues.event_name}
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
        <label htmlFor ='street_address'>
            <h2>Street Address</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='street_address'
                id='street_address'
                placeholder='Address'
                value={formValues.street_address}
                onChange={inputChange}
            />
        </label>
        <label htmlFor ='max_attendee'>
            <h2>Max Attendees</h2>
            <p>Required</p>
            <br></br>
            <textarea 
                name='max_attendee'
                id='max_attendee'
                placeholder='Must have at least 2 characters'
                value={formValues.max_attendee}
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

export default connect(state=>{
    return{
        user_id: state.user_id
    }
})(PotluckForm)