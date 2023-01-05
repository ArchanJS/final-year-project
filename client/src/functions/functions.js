import * as urls from './urls';
import axios from 'axios';

export const login=async(credentials)=>{
    try {
        const res=await axios.post(urls.PUBLIC_BASE_URL+`login`,credentials,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(res.status===200) return res.data.token;
        else return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const addVehicle=async(data,token)=>{
    try {
        let res=await axios.post(urls.PRIVATE_BASE_URL+`addvehicle`,data,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
        if(res.status===201) return true;
        else return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const searchVehicle=async(data,token)=>{
    try {
        const res=await axios.get(urls.PRIVATE_BASE_URL+`searchvehicle/${data}`,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        });
        if(res.status===200) return res.data.vehicles;
        else return [];
    } catch (error) {
        console.log(error);
        return [];
    }
}