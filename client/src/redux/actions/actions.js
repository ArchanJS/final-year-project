import {FETCH_DATA,SEARCH_VEHICLE,TOKEN} from '../constants';

export const loginAction=(data)=>{
    return (dispatch)=>dispatch({
        type:TOKEN,
        payload:data
    })
}

export const fetchDataAction=(data)=>{
    return (dispatch)=>dispatch({
        type:FETCH_DATA,
        payload:data
    })
}

export const searchVehicleAction=(data)=>{
    return (dispatch)=>dispatch({
        type:SEARCH_VEHICLE,
        payload:data
    })
}