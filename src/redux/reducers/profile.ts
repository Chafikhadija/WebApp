import { Action } from "../types";
import { FETCH_PROFILE, CLEAR_PROFILE } from "../actions/profile";


export default (state:any = {}, action : Action ) =>{
    const {type, payload} = action
    switch(type){
        case FETCH_PROFILE:
            return payload.data
            
        case CLEAR_PROFILE:
            return {
                ...state,
                [payload.model]:[ ...state[payload.model],payload.data]
            }
        default : 
        return state
    }
}