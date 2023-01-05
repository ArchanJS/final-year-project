import {FETCH_DATA,SEARCH_VEHICLE,TOKEN} from '../constants';

export const dataReducer=(state=[],action)=>{
    switch(action.type){
        case FETCH_DATA:
            return [...action.payload];
        case SEARCH_VEHICLE:
            return [...action.payload];
        default:
            return state;
    }
}

export const tokenReducer=(state="",action)=>{
    switch(action.type){
        case TOKEN:
            return action.payload;
        default:
            return state;
    }
}