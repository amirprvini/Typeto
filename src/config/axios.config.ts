import axios from "axios";

export const AXIOS = axios.create({
    baseURL:"http://localhost:3000", 
    timeout:2000
})