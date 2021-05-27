import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { axiosWithAuth } from "../helps/axiosWithAuth";
import Food from "./Food";



const PotluckPage = (props)=>{
    const {id} = useParams();

    const [potluck, setPotluck] = useState(null);

    useEffect(()=>{
        axiosWithAuth().get(`/api/events/${id}/event`)
        .then(res=>{
            setPotluck(res.data);
            console.log(res.data);
        })
    },[props.state])

    return (
        <div>{potluck &&
            <div>
                <h2>{`${potluck.event_name} event is taking place at ${potluck.street_address} ${potluck.city} ${potluck.state} ${potluck.zip}`}
                    <br></br>
                    {`Event date: ${potluck.date}`}
                    <br></br>
                    {`Event time: ${potluck.time}`}
                </h2>
                <div>
                    {potluck.attendees.length!==0 && potluck.attendees.map(food=>{
                        return <Food food={food}/>
                    })}
                </div>
            </div>}
            <button onClick={()=>props.history.push("/protected")}>Done</button>
        </div>
        
    )
}


export default connect(state=>{
    return{state}
})(PotluckPage);