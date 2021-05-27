import React from "react";



const FoodToAdd = (props)=>{
    const {name, foods, setFoods, index} = props;
    return(
        <div>
            <h2>{name}</h2>
            <button onClick={()=>{
                setFoods(foods.filter(food=>foods.indexOf(food)!==index));
            }}>Delete</button>
        </div>
        
    )
}


export default FoodToAdd;