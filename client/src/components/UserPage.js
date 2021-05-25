import React from "react";
import PotluckForm from './PotluckForm';
import {MainDiv, HeaderDiv, LogoutButton, Button, ButtonDiv, UserDiv, UserText, HiddenDiv} from './StyledComponents';


const UserPage = ()=>{
    let vis = 'none'

    return (
        <MainDiv>
            <HeaderDiv>
                <img src = 'https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e1230986a42a4d4965e22f6_icon.png' alt = 'logo'/>
                <LogoutButton>Log Out</LogoutButton>
            </HeaderDiv>
            <UserDiv>
                <img src = 'https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e1230986a42a4d4965e22f6_icon.png' alt = 'user-img'/>
                <UserText>
                <h2>Name</h2>
                <p>Introduction</p>
                </UserText>
                <Button>Edit User Info</Button>
            </UserDiv>
            <ButtonDiv>
                <Button>Join Potluck</Button>
                <Button onClick>Create Potluck</Button>
                <Button>Edit Potluck</Button>
            </ButtonDiv>
            <div className = 'hiddenDiv'>
                <PotluckForm/>
            </div>
        </MainDiv>
    )
}


export default UserPage;