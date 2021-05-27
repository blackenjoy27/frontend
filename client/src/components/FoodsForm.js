import React, {useState}  from 'react';
import FoodList from "./FoodList";
import {connect} from "react-redux";
import { axiosWithAuth } from '../helps/axiosWithAuth';

const FoodsForm = (props)=>{
    const [foods, setFoods] = useState([]);
    const [foodName, setFoodName] = useState("");

    
    const updateInput = (e)=>{
        setFoodName(e.target.value);
    }
    const addToList = (e)=>{
        e.preventDefault();
        if(foodName){
            setFoods([...foods, foodName]);
            axiosWithAuth().post("/api/attendeeandfood", 
            {
                event_id: props.state.newEventId, 
                food_name: foodName})
            .then(res=>{
                setFoodName("");
            })
            .catch(error=>{
                console.log(error);
            })
        }
        
    }
    const connectFoodsToEvent = ()=>{
        props.history.push("/protected");
    }
    return(
        <div>
            <h1>Foods To Be Expect</h1>
            <form onSubmit={addToList}>
                <input
                    onChange={updateInput}
                    value={foodName}
                />
                <button>Add Food</button>
            </form>
            {foods.length !== 0 && <FoodList foods={foods} setFoods={setFoods}/>}
            <button onClick={connectFoodsToEvent}>Complete!</button>
        </div>
    )
}

export default connect(state=>{
    return{state}
})(FoodsForm);