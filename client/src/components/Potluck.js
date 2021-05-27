import React from "react";
import {EventDiv} from "./StyledComponents";

const Potluck = (props)=>{
    const {event, push} = props;

    return (
        <div>
            <EventDiv>
                <h1>{event.event_name}</h1>
                <button onClick={()=>push(`/protected/event/${event.event_id}`)}>View</button>
            </EventDiv>
        </div>

        
    )
}


export default Potluck;