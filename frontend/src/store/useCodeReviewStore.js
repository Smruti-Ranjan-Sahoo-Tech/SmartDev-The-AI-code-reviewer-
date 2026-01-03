import {create} from "zustand";
import { axiosInstance } from "../lib/axios";

export const useCodeReviewStore = create((set,get)=>({
    code:"",
    responseLoading:false,
    reviewResponse:"",
    setReviewCode:(newCode)=>{
        set({code:newCode})
    },
    
    sendCode:async ()=>{
        set({responseLoading:true});
        try {
            const {code}=get();
            const response = await axiosInstance.post("/ai/get-review",{code});
            set({reviewResponse: response.data?.response ?? response.data});
            set({responseLoading:false});
        } catch (error) {
            console.error("Error sending code for review:", error);
            set({reviewResponse:error.message || "An error occurred while sending code for review."});
        } finally{
            set({responseLoading:false});
        }
    }

}))