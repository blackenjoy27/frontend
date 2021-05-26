import React, {useEffect}from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {reset} from "../actions";
import {connect} from "react-redux";

const HomePage = (props)=>{
    useEffect(()=>{
        props.dispatch(reset());
        localStorage.removeItem("token");
        localStorage.removeItem("user-data");
    },[])
    return(
        <BgDiv>
            <header>
                <a className="logo">
                    <strong>Forty</strong>
                    <span>by HTML5 UP</span>
                </a>
                <Link to="/login">Sign In</Link>
            </header>
            <MainDiv>
                <h1>Welcome to the Potluck Planner!</h1>
                <Paragraph>
                If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. 

                In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.
                </Paragraph>
                <Link className="sign-up-btn" to = '/sign-up'><H3>Sign Up</H3></Link>
            </MainDiv>
            
            <Contact/>
            <Footer/>
        </BgDiv>
        

    )
}


export default connect()(HomePage);

const MainDiv = styled.div`
background-image: url('https://images.unsplash.com/photo-1617201835175-aab7b1d71d87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1265&q=80');
background-repeat: no-repeat;
background-position: bottom; 
background-size: cover;
color: white;
padding: 15%;
`

const BgDiv = styled.div`
background-color: #ffbf80;
padding: 3% 0;
`

const Paragraph = styled.p`
background-color: white;
opacity: 0.7; 
color: black;
margin: 3% 5% 10%;
padding: 5%;
border-radius: 50%;
`

const H3 = styled.div`
color: black;
border: 3px solid white;
width: 12%; 
padding: 0.5%;
background-color: white;
text-align: center;
text-decoration: none;
`