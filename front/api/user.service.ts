import { AxiosError } from "axios";
import axiosApi from "./axiosApi";

const USER_URI = "/user";

export const apiGetUserData = async (userId:string) => {
    try {
        const { data } = await axiosApi.get(`${USER_URI}/${userId}`);
        return { ok: true, data }
    } catch (error:unknown) {
        console.log(error)
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}