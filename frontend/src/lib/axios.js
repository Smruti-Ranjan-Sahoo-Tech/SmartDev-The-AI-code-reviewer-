import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://smartdev-the-ai-code-reviewer.onrender.com",
})