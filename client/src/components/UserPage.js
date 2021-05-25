import React from "react";
import {MainDiv, HeaderDiv, LogoutButton, Button, ButtonDiv, UserDiv, UserText} from './StyledComponents';
import {Link, useHistory} from "react-router-dom";

const UserPage = ()=>{
    const {push} = useHistory();

    const logout = ()=>{
        localStorage.removeItem("token");
        push("/");
    }

    return (
        <MainDiv>
            <HeaderDiv>
                <img src = 'https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e1230986a42a4d4965e22f6_icon.png' alt = 'logo'/>
                <LogoutButton onClick={logout}>Log Out</LogoutButton>
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
                
                <Link to="/protected/create">Create Potluck</Link>
                <Button>Edit Potluck</Button>
            </ButtonDiv>
        </MainDiv>
    )
}


export default UserPage;