import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    initialState,
    name: "counter",
    reducers: {
        increment: (state) => {
            state.value++; // Directly mutating the state
        },
        decrement: (state) => {
            state.value--; // Directly mutating the state
        },
    }
});


export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer; 