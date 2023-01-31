import { commonrequest } from "./ApiCall";
import {BACKEND_URL} from "./helper";

export const registerfunction = async(data)=>{
    return await commonrequest("POST" ,`${BACKEND_URL}/user/register`,data)
}