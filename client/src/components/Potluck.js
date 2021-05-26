import React from "react";


const Potluck = (props)=>{
    const {event} = props;

    return (
        <div>
            <h1>{event.event_name}</h1>
        </div>
    )
}


export default Potluck;