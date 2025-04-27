import { createSlice } from "@reduxjs/toolkit";
const state = {
    rent: {},

}
const rentSlice = createSlice(
    {
        name: 'currentRent',
        initialState: state,
        reducers: {
            set: (state, action) => {
                state.rent = action.payload
            }
            ,
            setCar: (state, action) => {
                state.rent = { ...state.rent, code_car: action.payload }
            }
        }
    }
)
export const { set, setCar } = rentSlice.actions
export default rentSlice.reducer