
import React, { useEffect } from "react";
import PrivateRoute from "../components/PrivateRoute";
import PotluckList from "./PotluckList";
// import PotluckForm from "./PotluckForm";
import {useHistory} from "react-router-dom";
import {MainDiv, HeaderDiv, LogoutButton, Button, ButtonDiv, UserDiv, UserText, EventsDiv, UserImg, PotluckButton} from './StyledComponents';
import {reset,restoreData} from "../actions";
import {connect} from "react-redux";


const UserPage = (props)=>{
    
    const {push} = useHistory();

    useEffect(()=>{
        const userData = localStorage.getItem("user-data");
        let backup;
        if(userData && !props.state.user_id){
            backup = JSON.parse(userData);
            props.dispatch(restoreData(backup));
        }else if( userData && props.state.user_id){
            backup = JSON.stringify(props.state);
            localStorage.setItem("user-data",backup);
        }
        else{
            backup = JSON.stringify(props.state);
            localStorage.setItem("user-data",backup);
        }
    },[props.state]);



    const logout = ()=>{
        props.dispatch(reset());
        localStorage.removeItem("token");
        localStorage.removeItem("user-data");
        props.history.push("/");
    }

    return (
        <MainDiv>

            <UserDiv>
            <HeaderDiv>
                <a className="logo">
                    <strong>Forty</strong>
                    <span>by HTML5 UP</span>
                </a>
                <Button onClick={logout}>Log Out</Button>
                
            </HeaderDiv>
                <ButtonDiv>
                <h2>Username</h2>
                <PotluckButton onClick={()=>props.history.push("/protected/create")}>Create Potluck</PotluckButton>
                <PotluckButton onClick={()=>props.history.push("/protected/user-events")}>Edit Potluck</PotluckButton>
                {/* <PotluckButton onClick={()=>props.history.push("/protected/create")}>Create Potluck</PotluckButton>
                <PotluckButton>Edit Potluck</PotluckButton> */}
                </ButtonDiv>
            </UserDiv>
 
            {props.state.events.length!==0 && <PotluckList events={props.state.events} all={true}/>}

        </MainDiv>
    )
}


export default connect(state=>{
    return{state};
})(UserPage);