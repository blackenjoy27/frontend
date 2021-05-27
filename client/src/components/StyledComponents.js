import styled from 'styled-components';

// HOME PAGE STYLING // 

// const IntroDiv = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: center;
// margin: 2% 20%;
// `;

// const LoginButton = styled.button`
// padding: 0.5em;
// margin: 2.5% 2.5%;
// height: fit-content;
// background: white;
// color: black;
// border-radius: 10px;
// `;

// const LabelDiv = styled.div`
// display: flex;
// justify-content: space-around;
// margin: 2%;
// `;

// const Label = styled.label`
// display: flex;
// margin: 20% 0;
// `;

// USER PAGE STYLING //

const MainDiv = styled.div`
background-color: #ffbf80;
padding: 3% 0;
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

const UserImg = styled.img`
width: 20%;
`;

const UserDiv = styled.div`
display: flex;
justify-content: space-between;
margin: 0;
padding-right: 21%;
padding-left: 20%;
padding-bottom: 3%;
background: white;
`;

const UserText = styled.div`
padding-right: 40%;
background: white;
`;

const ButtonDiv = styled.div`
padding-right: 12%;
padding-left: 12%;
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: white;
`;

const Button = styled.button`
padding: 0.5em;
height: fit-content;
margin-top: 3%;
background: white;
color: black;
border-radius: 10px;
:hover{
    color: #ffbf80;
    border-color: #ffbf80;
}
`;

const FormDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background: white;
`;


const EventsContainer = styled.div`
    display:flex;
    flex-direction:column;
    border: 2px solid silver;
    width:85%;
    margin:2rem auto;
    padding-left: 2rem;
    border-radius:10px;
`

const EventDiv = styled.div`
    display:flex;
    flex-direction:row;
    border: 2px solid silver;
    width:85%;
    margin:1rem;
    padding-left: 2rem;
    border-radius:10px;
    justify-content: space-between;

    button{
        margin:0.5rem;
    }
`
const MessageDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 2%;
`;

const ContactDiv = styled.div`
display: flex;
flex-direction: row;
padding: 2%;
`;

const ContactLabel = styled.label`
padding-left: 2%;
`;

const MessageButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 2%;
`;

export {EventsContainer, EventDiv,HeaderDiv, MainDiv, LogoutButton, Button, ButtonDiv, UserImg, UserDiv, UserText, FormDiv, MessageDiv, ContactDiv, ContactLabel, MessageButtons};

