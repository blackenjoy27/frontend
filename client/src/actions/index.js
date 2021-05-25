import {axiosWithAuth} from "../helps/axiosWithAuth";
export const LOGIN = "LOGIN";
export const ADD_EVENT = "ADD_EVENT";



export const login = (user) => {
    return(dispatch) => {
        axiosWithAuth().post("/api/auth/login", user)
        .then(res=>{
            localStorage.setItem("token", res.data.token);
            dispatch({type:LOGIN, payload: res.data.user_id})
        })
        .catch(error=>{
            console.log(error);
        })
    }
}
export const addEvent = (event) =>{
    return (dispatch)=>{
        axiosWithAuth().post("/api/events/", event)
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}