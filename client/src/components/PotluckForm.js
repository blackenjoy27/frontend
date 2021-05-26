import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { IconButton } from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const initialValues = {
    eventName: '',
    date: '',
    time: '',
    city: '',
    state: '',
    streetAddress: '',
    zip: '',
    maxAttendee: '',
};

export default function PotluckForm() {
  const classes = useStyles();
  const [truckForm, setTruckForm] = useState("");
  const [values, setValues] = useState(initialValues);
  const [location, setLocation] = useState("");

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handelChanges = (e) => {
    const { value } = e.target;
    setTruckForm(value);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      values.username.match(/^\w{5,11}$/g) &&
      values.password.match(/^[.\S]{7,15}$/g) &&
      values.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
    ) {
    }
    return;
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setLocation(position.coords.latitude + "," + position.coords.longitude);
  }
  getLocation();

  function locationSet() {
    setValues({ ...values, location: location });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Create Your Own Potluck!
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                name="eventName"
                variant="outlined"
                required
                fullWidth
                id="eventName"
                label="Event Name"
                onChange={onChange}
                value={values.eventName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="date"
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                id="date"
                label="Date"
                value={values.date}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="time"
                variant="outlined"
                required
                fullWidth
                id="time"
                label="Time"
                onChange={onChange}
                value={values.time}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                id="city"
                label="City"
                value={values.city}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="state"
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                id="state"
                label="State"
                value={values.state}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="streetAddress"
                variant="outlined"
                required
                fullWidth
                label="Street Address"
                type="address"
                id="streetAddress"
                onChange={onChange}
                value={values.streetAddress}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={locationSet}>
                      {/* <LocationSearchingIcon /> */}
                    </IconButton>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="zip"
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                id="zip"
                label="Zip Code"
                value={values.zip}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="maxAttendee"
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                id="maxAttendee"
                label="Max Attendees"
                value={values.maxAttendee}
                autoFocus
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Potluck
          </Button>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
    </Container>
  );
}
// import React, { useState, useEffect } from 'react'
// import * as yup from 'yup';
// import schema from './validation/Schema'

// const initialFormValues = {
//     eventName: '',
//     date: '',
//     time: '',
//     city: '',
//     state: '',
//     streetAddress: '',
//     zip: '',
//     maxAttendee: '',
// }

// const initialFormErrors = {
//     eventName: '',
//     date: '',
//     time: '',
//     state: '',
//     city: '',
//     streetAddress: '',
//     zip: '',
//     maxAttendee: '',
// }

// const initialDisabled = true

// export default function PotluckForm () {
//     const [formValues, setFormValues] = useState(initialFormValues)
//     const [formErrors, setFormErrors] = useState(initialFormErrors)
//     const [disabled, setDisabled] = useState(initialDisabled)

//     const validate = e => {
//         const value = e.target.value;
//         yup
//         .reach(schema, e.target.name)
//         .validate(value)
//         .then(valid => {
//             setFormErrors({
//                 ...formErrors,
//                 [e.target.name]: ''
//             })
//         })
//         .catch(err => {
//             setFormErrors({
//                 ...formErrors,
//                 [e.target.name]: err.errors[0]
//             })
//         })
//     }

//     useEffect(() => {
//         schema.isValid(formValues)
//         .then(valid => {
//         setDisabled(!valid)
//         })
//         .catch(err =>  {
//             console.log(err)
//         })
//     }, [formValues])

//     const inputChange = e => {
//         e.persist();
//         validate(e);
//         const value = e.target.value;
//         setFormValues({ ...formValues, [e.target.name]: value })
//     }

//     const formSubmit = e => {
//         e.preventDefault();
//         console.log(formSubmit, 'Submitted')
//         // axios
//         // .post("", formValues)
//         // .then(response => {
//         //     const apiReturn = response.data
//         //     console.log(response.data)
//         //     setUsers([...users, apiReturn])
//         //     setFormValues(formValues)
//         // })
//         // .catch(err => console.log(err));
//     };


//     return (
//         <div>
//         <form onSubmit={formSubmit}>
//         <label htmlFor ='eventName'>
//             <h2>Event Name</h2>
//             <p>Required</p>
//             <br></br>
//             <input
//                 name='eventName'
//                 id='eventName'
//                 placeholder='Must have at least 3 characters'
//                 value={formValues.eventName}
//                 onChange={inputChange}
//             />
//         </label>
//         <label htmlFor ='date'>
//             <h2>Date</h2>
//             <p>Required</p>
//             <br></br>
//             <input
//                 name='date'
//                 id='date'
//                 placeholder='Date'
//                 value={formValues.date}
//                 onChange={inputChange}
//             />
//         </label>
//         <label htmlFor ='time'>
//             <h2>Time</h2>
//             <p>Required</p>
//             <br></br>
//             <input
//                 name='time'
//                 id='time'
//                 placeholder='Time'
//                 value={formValues.time}
//                 onChange={inputChange}
//             />
//         </label>
//         <label htmlFor ='state'>
//             <h2>State</h2>
//             <p>Required</p>
//             <br></br>
//             <input 
//                 name='state'
//                 id='state'
//                 placeholder='Must have at least 2 characters'
//                 value={formValues.state}
//                 onChange={inputChange}
//             />
//         </label>
//         <label htmlFor ='city'>
//             <h2>City</h2>
//             <p>Required</p>
//             <br></br>
//             <input 
//                 name='city'
//                 id='city'
//                 placeholder='Must have at least 2 characters'
//                 value={formValues.city}
//                 onChange={inputChange}
//             />
//         </label>
//         <label htmlFor ='zip'>
//             <h2>Zip</h2>
//             <p>Required</p>
//             <br></br>
//             <input 
//                 name='zip'
//                 id='zip'
//                 placeholder='Must have at least 5 characters'
//                 value={formValues.zip}
//                 onChange={inputChange}
//             />
//         </label>
//         <label htmlFor ='streetAddress'>
//             <h2>Street Address</h2>
//             <p>Required</p>
//             <br></br>
//             <textarea
//                 name='streetAddress'
//                 id='streetAddress'
//                 placeholder='Address'
//                 value={formValues.streetAddress}
//                 onChange={inputChange}
//             />
//         </label>
//         <label htmlFor ='maxAttendee'>
//             <h2>Max Attendees</h2>
//             <p>Required</p>
//             <br></br>
//             <input 
//                 name='maxAttendee'
//                 id='maxAttendee'
//                 placeholder='Must have at least 2 characters'
//                 value={formValues.maxAttendee}
//                 onChange={inputChange}
//             />
//         </label>
//             <div className ='submit'>
//                 <button disabled={disabled}>Create Potluck</button>
//             </div>
//             </form >
//         </div >
//     )
// }