import {LOGIN} from "../actions";

const initialState = {
    isLogin: false,
    user_id: null,
    events:[]
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user_id: action.payload
            }
        default:
            return state
    }
}

export default reducer;