import React from "react";
import {EventDiv, Button} from "./StyledComponents";

const Potluck = (props)=>{
    const {event, push} = props;

    return (
        <div>
            <EventDiv>
                <h1>{event.event_name}</h1>
                <Button onClick={()=>push(`/protected/event/${event.event_id}`)}>View</Button>
            </EventDiv>
        </div>

        
    )
}


export default Potluck;