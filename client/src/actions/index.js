import axios from "axios";
import {useHistory} from "react-router-dom";
export const LOGIN = "LOGIN";



export const login = (user) => {
    return(dispatch) => {
        axios.post("https://theonewhoknocks.herokuapp.com/api/auth/login", user)
        .then(res=>{

            localStorage.setItem("token", res.data.token);
            console.log(res.data);
            dispatch({type:LOGIN, payload: res.data.user_id})
            //redirect to the userpag
        })
        .catch(error=>{
            console.log(error);
        })
        
    }
}