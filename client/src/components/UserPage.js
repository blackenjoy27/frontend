import React, { useEffect } from "react";
import {MainDiv, HeaderDiv, LogoutButton, Button, ButtonDiv, UserDiv, UserText} from './StyledComponents';
import PrivateRoute from "../components/PrivateRoute";
import PotluckList from "./PotluckList";
import PotluckForm from "./PotluckForm";
import {Link, useHistory} from "react-router-dom";


import {restoreData} from "../actions";
import {connect} from "react-redux";


const UserPage = (props)=>{
    const {push} = useHistory();

    useEffect(()=>{
        const userData = localStorage.getItem("user-data");
        let backup;
        if(userData){
            backup = JSON.parse(userData);
            props.dispatch(restoreData(backup));
        }else{
            backup = JSON.stringify(props.state);
            localStorage.setItem("user-data",backup);
        }
    },[])

    const logout = ()=>{
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
                {/* <Button>Join Potluck</Button> */}
                <Button onClick={()=>push("/protected/events")}> Join Potluck </Button>
                <Button onClick={()=>push("/protected/create")}>Create Potluck</Button>
                <Button>Edit Potluck</Button>
            </ButtonDiv>
            <PrivateRoute path="/protected/events" component={PotluckList}/> 
            <PrivateRoute path="/protected/create" component={PotluckForm}/>
        </MainDiv>
    )
}


export default connect(state=>{
    return{state};
})(UserPage);