// import { createStore } from "redux";
// import reducer from './Reducer'
// const store = createStore(reducer);

import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from './userSlice'
import currentRent from './rentSlice'
const store = configureStore(
    {
        reducer:{
            current:currentUserReducer,
            rental:currentRent
        }
    }
)
export default store;