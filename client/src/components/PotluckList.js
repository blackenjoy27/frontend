import React from "react";
import { connect } from "react-redux";
import Potluck from "../components/Potluck";




const PotluckList = (props) =>{
    console.log("I am here");
    console.log(props.events);
    console.log(typeof props.events);
    return(
        <div>
            <h1>I Am here</h1>
            {props.events && props.events.map(event=>{
                return <Potluck key={event.event_id} event={event}/>
            })}
        </div>
    )
}
export default connect(state=>{
    return{
        events: state.events
    }
})(PotluckList);