import React from "react";
import {EventDiv, Button} from "./StyledComponents";

const Potluck = (props)=>{
    const {event, push, all, cancelEvent, edit} = props;
    
    if(all){
        return (
            <div>
                <EventDiv>
                    <h1>{event.event_name}</h1>
                    <button onClick={()=>push(`/protected/event/${event.event_id}`)}>View</button>
                </EventDiv>
            </div>
        )
    }
    return(
        <div>
            <EventDiv>
                <h1>{event.event_name}</h1>
                <Button onClick={()=>edit(event)}>Edit</Button>
                <Button onClick={()=>cancelEvent(event.event_id)}>Cancel Event</Button>
            </EventDiv>
        </div>
    )
    
}


export default Potluck;