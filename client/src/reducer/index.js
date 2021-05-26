import {LOGIN, ADD_EVENT, LOG_OUT, LOAD_EVENTS, RESTORE_DATA} from "../actions";

const initialState = {
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
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload]
            }
        case LOAD_EVENTS:
            return{
                ...state,
                events: action.payload
            }

        case LOG_OUT:
            return initialState;

        case RESTORE_DATA:
            return action.payload;
            
        default:
            return state
    }
}

export default reducer;