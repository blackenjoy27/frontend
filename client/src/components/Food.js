import React from "react";
import {getEvents} from "../actions";
import {connect} from "react-redux";

import {axiosWithAuth} from "../helps/axiosWithAuth";

const Food = (props) =>{
    const {food} = props;
    
    
    const handleClick = ()=>{
        if(!food.username){
            const data = {
                is_attendings:true
            }
            axiosWithAuth().put(`/api/attendeeandfood/${food.attendeeandfood_Id}`, data)
            .then(res=>{
                props.dispatch(getEvents());
            })
        }
    }

    return(
        <div>
            <h2>{food.food_name}</h2>
            <button onClick={handleClick}>{food.username?food.username:"Empty"}</button>
        </div>
        
        
    )
}


export default connect()(Food);