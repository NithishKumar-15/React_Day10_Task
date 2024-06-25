import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/Product.js";

const store=configureStore({
        reducer:{
            productReducer
        },
        devTools:true
    }
)

export default store;