import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:7171/api"})

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if(token) {
        req.headers.Authorization = `Bearer ${token}` 
    }
    return req
})

export const fetchBalance = () => API.get("/transactions/balance")
export const sendMoney = () => API.get("/transactions/send")
export const fetchHistory = () => API.get("/transactions/history")
