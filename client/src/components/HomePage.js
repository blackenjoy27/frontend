import React from "react";
import Footer from "./Footer";
import styled from 'styled-components'
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonTp from "@material-ui/core/Button";



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
        <BodyDiv>
            <Header>
                <h1>Potluck Planner</h1>
                <NavBar>
                    <ButtonTp
                        variant="contained"
                        color="neutral"
                        onClick={()=>push("/sign-up")}
                        >
                        Sign Up
                    </ButtonTp>
                    <ButtonTp
                        variant="contained"
                        color="primary"
                        onClick={checkStillLogin}
                        >
                        Sign In
                    </ButtonTp>
   
                </NavBar>
            </Header>
            <IntroductionDiv>
                <h1>Happiness is eating food with friends</h1>
            </IntroductionDiv>
            <Footer/>
        </BodyDiv>
    )
}
export default HomePage;

const BodyDiv = styled.div`
    background-color:#e1e5ea;
    height:100%;
`

const Header = styled.header`
    display:flex;
    width:100%;
    background-color: #fff5b7;

    h1{
        width:50%;
    }

`
const NavBar = styled.nav`
    display:flex;
    align-items:center;
    width:30%;
    justify-content: space-evenly;

    button{
        width:35%;
        height:2rem;
    }
`
const IntroductionDiv = styled.div`
    width:70%;
    margin: 3rem auto 2rem;
    border:2px solid silver;
    display:flex;
    justify-content:center;
    padding:4rem;
    border-radius:10px;
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

export {NavLink};