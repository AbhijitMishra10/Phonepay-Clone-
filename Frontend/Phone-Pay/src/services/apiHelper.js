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
export const recharge = (data) => API.post("/transaction/recharge", data)
export const bill = (data) => API.post("/transaction/bill", data)
export const insuaranceService = (data) => API.post("/transaction/insuaranceService",data)
export const createMerchant = (data) => API.post("/merchant/create", data)
export const getQR = (data) => API.post(`/merchant/${id}/qr`)
export const payMerchant = (data) => API.post("/merchant/payMercant", data)


