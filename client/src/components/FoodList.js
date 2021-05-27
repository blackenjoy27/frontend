import React from "react";
import FoodToAdd from "./FoodToAdd";

const FoodList = (props)=>{
    const {foods, setFoods} = props;
    return(
        <div>
            {foods.map(food=>{
                return <FoodToAdd key={foods.indexOf(food)} 
                name={food} foods={foods} setFoods={setFoods}
                index={foods.indexOf(food)}/>
            })}
        </div>
    )
}

export default FoodList;