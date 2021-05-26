import React from "react";
import PotluckForm from './PotluckForm';
import {MainDiv, HeaderDiv, LogoutButton, Button, ButtonDiv, UserDiv, UserText, FormDiv, UserImg} from './StyledComponents';


const UserPage = ()=>{

    return (
        <MainDiv>
            {/* <HeaderDiv>
                <img src = 'https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e1230986a42a4d4965e22f6_icon.png' alt = 'logo'/>
                <LogoutButton>Log Out</LogoutButton>
            </HeaderDiv> */}
            <header>
                <a className="logo">
                    <strong>Forty</strong>
                    <span>by HTML5 UP</span>
                </a>
                <nav>Log Out</nav>
            </header>
            <UserDiv>
                <UserImg src = 'https://www.netclipart.com/pp/f/311-3110823_potluck-icon.png' alt = 'user-img'/>
                <UserText>
                <h2>Username</h2>
                <p>User Introduction</p>
                </UserText>
                <Button>Edit User Info</Button>
            </UserDiv>
            <ButtonDiv>
                <Button>Join Potluck</Button>
                <Button>Create Potluck</Button>
                <Button>Edit Potluck</Button>
            </ButtonDiv>
            <FormDiv>
                <PotluckForm/>
            </FormDiv>
        </MainDiv>
    )
}


export default UserPage;