import { createSlice } from "@reduxjs/toolkit";

const state = {
    user: {}
}

const userSlice = createSlice(
    {
        name: 'currentUser',
        initialState: state,
        reducers:{
            set:(state,action)=>
            {
                state.user = action.payload
            }
        }
    }
)

export const {set} =userSlice.actions

export default userSlice.reducer