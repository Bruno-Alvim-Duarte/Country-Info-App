import axios from "axios";

console.log('process.env.BACKEND_URL', process.env.NEXT_PUBLIC_BACKEND_URL)
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default api;