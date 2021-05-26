import React, { useState, useEffect } from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition(position) {
//   setLocation(position.coords.latitude + "," + position.coords.longitude);
// }
// getLocation();

// function locationSet() {
//   setValues({ ...values, location: location });
// }

const PotluckForm = (props) => {
    const classes = useStyles();
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
//     const [location, setLocation] = useState("");

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

   const inputChange = e => {
        validate(e);
        const value = e.target.value;
        setFormValues({ ...formValues, [e.target.name]: value })
    }

   const formSubmit = e => {
        e.preventDefault();
        const newEvent = {...formValues, user_id: props.user_id}
        props.dispatch(addEvent(newEvent));
    };



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Create Your Own Potluck!
        </Typography>
        <form className={classes.form} onSubmit={formSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Event Name"
                name='event_name'
                id='event_name'
                value={formValues.event_name}
                onChange={inputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="date"
                variant="outlined"
                required
                fullWidth
                id="date"
                label="Date"
                autoFocus
                value={formValues.date}
                onChange={inputChange}
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
                value={formValues.time}
                onChange={inputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                variant="outlined"
                required
                fullWidth
                label="City"
                autoFocus
                value={formValues.city}
                onChange={inputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="state"
                variant="outlined"
                required
                fullWidth
                label="State"
                autoFocus
                value={formValues.state}
                onChange={inputChange}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                
                variant="outlined"
                required
                fullWidth
                label="Street Address"
                type="address"
                id="streetAddress"
                name='street_address'
                placeholder='Address'
                value={formValues.street_address}
                onChange={inputChange}
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
                id="zip"
                label="Zip Code"
                autoFocus
                value={formValues.zip}
                onChange={inputChange}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Max Attendees"
                autoFocus
                name='max_attendee'
                value={formValues.max_attendee}
                onChange={inputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
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

}

export default connect(state=>{
    return{
        user_id: state.user_id
    }
})(PotluckForm)