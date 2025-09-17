import { configureStore } from "@reduxjs/toolkit";
import transReducer from './transactionSlice'

const store = configureStore({
    reducer: {
        transaction: transReducer
    }
})

export default store