import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helps/axiosWithAuth";
import {connect} from "react-redux";
import PotluckList from "./PotluckList";
import {useHistory} from "react-router-dom";


const UserEvents = (props)=>{
    const [userEvents, setUserEvents] = useState(null);
    const {push} = useHistory();

    useEffect(()=>{
        if(props.id){
            axiosWithAuth().get(`/api/events/${props.id}/user`)
            .then(res=>{
                setUserEvents(res.data);
            })
        }
        else{
            props.history.push("/protected")
        }
    },[props.data])
    return(
        <div>
            <h1>Events</h1>
            {userEvents && <PotluckList events={userEvents} all={false}/>}
            <button onClick={()=>push("/protected")}>Go Back</button>
        </div>
    )
}

export default connect(state=>{
    return{
        id:state.user_id,
        data: state.events,
    }
})(UserEvents);