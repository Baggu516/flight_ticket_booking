import { BOOKED } from "./actionTypes";
// const state=[]
export const booked=(value={})=>{
    
    return {
        type:BOOKED,
        value:value
    }
}