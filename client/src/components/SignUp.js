import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { IconButton } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
      width: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

// const FormDiv = styled.div`
//     background-image: url('https://hips.hearstapps.com/ell.h-cdn.co/assets/15/52/1450738482-elle-potluck-04-getty.jpg');
//     background-repeat: no-repeat;
//     background-position: bottom; 
//     background-size: cover;
//     color: white;
//     padding: 15%;
// `

const initialValues = {
    username: "",
    password: "",
    email: ""
  };

export default function SignUp() {
    const classes = useStyles();
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
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                onChange={onChange}
                value={values.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                id="username"
                label="Username"
                value={values.username}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                type="password"
                label="Password"
                onChange={onChange}
                value={values.password}
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>


        // <Container component='main' maxWidth ='xs'>
        //     <form id = 'signup-form'>
        //         <div className = 'form-group submit'>
        //             <h3>Sign up to join a Potluck, or host your own!</h3>
        //         </div>

        //         <div className = 'form-group inputs' onSubmit={onSubmit}>
        //             <label><h3>Username</h3>
        //                 <input id = 'username-input'
        //                     value = {values.username}
        //                     onChange = {onChange}
        //                     name = 'username'
        //                     type = 'text'
        //                 />
        //             </label>

        //             <label><h3>Email</h3>
        //                 <input id = 'email-input'
        //                     value = {values.email}
        //                     onChange = {onChange}
        //                     name = 'email'
        //                     type = 'text'
        //                 />
        //             </label>

        //             <label><h3>Password</h3>
        //                 <input id = 'password-input'
        //                     value = {values.password}
        //                     onChange = {onChange}
        //                     name = 'password'
        //                     type = 'text'
        //                 />
        //             </label>
        //         </div>

        //         <div className = 'form-group checkboxes'>
        //             <label><h3>Accept Terms of Service</h3>
        //                 <input id = 'terms-of-service check'
        //                     type = 'checkbox'
        //                     name = 'pepperoni'
        //                     checked = {values.termsOfService}
        //                     onChange = {onChange}
        //                 />
        //             </label>
        //         </div>

        //         <button>Create an Account</button>
        //     </form>
        // </Container>
    )
}