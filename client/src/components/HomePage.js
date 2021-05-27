import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import styled from 'styled-components'
import {Link, useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";



const HomePage = ()=>{
    const {push} = useHistory();

    
    const checkStillLogin = (e)=>{
        e.preventDefault();
        const token = localStorage.getItem("token");
        if(token){
            push("/protected");
        }else{
            push("/login");
        }
    }
    
    return(
        <BgDiv>
            <header>
                <a className="logo">
                    <strong>Forty</strong>
                    <span>by HTML5 UP</span>
                </a>
                <Link onClick={checkStillLogin} className="sign-up-btn">
                    <NavLink variant="outline-light" size="lg" color="white">
                        Sign In
                    </NavLink>
                </Link>
                
            </header>
            <MainDiv>
                <h1>Welcome to the Potluck Planner!</h1>
                <Paragraph>
                If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. 

                In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.
                </Paragraph>
                <Link className="sign-up-btn" to="/sign-up">
                    <NavLink variant="outline-light" size="lg" color="white">
                        Sign Up
                    </NavLink>
                </Link>  
                
            </MainDiv>
            
            <Contact/>
            <Footer/>
        </BgDiv>
        

    )
}


export default HomePage;

const MainDiv = styled.div`
background-image: url('https://images.unsplash.com/photo-1617201835175-aab7b1d71d87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1265&q=80');
background-repeat: no-repeat;
background-position: bottom; 
background-size: cover;
color: white;
padding-left: 15%;
padding-right: 5%;
padding-top: 5%;
padding-bottom: 15%;
`

const BgDiv = styled.div`
background-color: #ffbf80;
padding: 1% 0;
`

const Paragraph = styled.p`
background-color: white;
opacity: 0.7; 
color: black;
margin: 3% 5% 10%;
padding: 5%;
border-radius: 50%;
`
const NavLink = styled(Button)`
padding: 5px;
border-radius: 5px;
background: white;
color: black;
text-decoration: none;
&:hover {
color: #ffbf80;
}
`;

const H3 = styled.div`
color: black;
border: 3px solid white;
width: 12%; 
padding: 0.5%;
background-color: white;
text-align: center;
text-decoration: none;
`
export {NavLink};