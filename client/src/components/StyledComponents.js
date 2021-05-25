import styled from 'styled-components';

// HOME PAGE STYLING // 

const IntroDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 2% 20%;
`;

const LoginButton = styled.button`
padding: 0.5em;
margin: 2.5% 2.5%;
height: fit-content;
background: white;
color: black;
border-radius: 10px;
`;

const LabelDiv = styled.div`
display: flex;
justify-content: space-around;
margin: 2%;
`;

const Label = styled.label`
display: flex;
margin: 20% 0;
`;

// USER PAGE STYLING //

const MainDiv = styled.div`
margin: 0 auto;
`;

const HeaderDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 2%;
height: 100px;
background: black;
`;

const LogoutButton = styled.button`
padding: 0.5em;
margin: 2.5% 2.5%;
height: fit-content;
background: white;
color: black;
border-radius: 10px;
`;

const UserDiv = styled.div`
display: flex;
justify-content: space-between;
margin: 0 12%;
`;

const UserText = styled.div`
margin-right: 40%;
`;

const ButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 8%;
`;

const Button = styled.button`
padding: 0.5em;
height: fit-content;
margin-top: 3%;
background: white;
color: black;
border-radius: 10px;
margin-right: 0;
`;

const HiddenDiv = styled.div`
visibility: hidden;
`;

export {LoginButton, IntroDiv, Label, LabelDiv};
export {HeaderDiv, MainDiv, LogoutButton, Button, ButtonDiv, UserDiv, UserText, HiddenDiv};