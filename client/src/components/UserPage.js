
import React, { useEffect } from "react";
import PrivateRoute from "../components/PrivateRoute";
import PotluckList from "./PotluckList";
import PotluckForm from "./PotluckForm";
import {useHistory} from "react-router-dom";
import {MainDiv, HeaderDiv, LogoutButton, Button, ButtonDiv, UserDiv, UserText, FormDiv, UserImg} from './StyledComponents';
import {reset,restoreData} from "../actions";
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
        props.dispatch(reset());
        localStorage.removeItem("token");
        localStorage.removeItem("user-data");
        push("/");
    }

    return (
        <MainDiv>
            <HeaderDiv>
                <img src = 'https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5e1230986a42a4d4965e22f6_icon.png' alt = 'logo'/>

                <LogoutButton onClick={logout}>Log Out</LogoutButton>
            </HeaderDiv>

            <UserDiv>
                <UserImg src = 'https://www.netclipart.com/pp/f/311-3110823_potluck-icon.png' alt = 'user-img'/>
                <UserText>
                <h2>Username</h2>
                <p>User Introduction</p>
                </UserText>
                <Button>Edit User Info</Button>
            </UserDiv>
            <ButtonDiv>
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