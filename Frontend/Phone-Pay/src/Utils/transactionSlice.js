import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: 'Transaction',
    initialState: {
        paymentValue: 0,
        transactions: [],
        balance: 0
    },
    reducers: {
        sendPayment: (state, action) => {
            state.paymentValue = action.payload
        }, 
        resetPayment: (state) => {
            state.paymentValue = 0
        },
        setBalance: (state,action) => {
            state.balance = action.payload
        }, 
        setTransactions: (state,action) => {
            state.transactions = action.payload
        } 
    }
})

export const {sendPayment, resetPayment, setBalance, setTransactions} = transactionSlice.actions

export default transactionSlice.reducer