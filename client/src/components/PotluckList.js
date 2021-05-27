import React from "react";
import { connect } from "react-redux";
import Potluck from "../components/Potluck";
import {EventsContainer} from "./StyledComponents";
import {useHistory} from "react-router-dom";



const PotluckList = (props) =>{
    console.log(props);
    const {push} = useHistory();

    return(
        <EventsContainer>
            {props.events && props.events.map(event=>{
                return <Potluck key={event.event_id} event={event} push={push}/>
            })}
        </EventsContainer>
    )
}
export default connect(state=>{
    return{
        events: state.events
    }
})(PotluckList);