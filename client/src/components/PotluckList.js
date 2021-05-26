import React from "react";
import { connect } from "react-redux";
import Potluck from "../components/Potluck";




const PotluckList = (props) =>{
    
    return(
        <div>
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