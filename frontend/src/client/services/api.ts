import axios from "axios";

console.log('process.env.BACKEND_URL', process.env.BACKEND_URL)
const api = axios.create({
    baseURL: process.env.BACKEND_URL,
});

export default api;