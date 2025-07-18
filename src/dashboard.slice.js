import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'en'
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    },
    selectors: {
        getLanguage: (state) => state.language
    }
})

export const actions = dashboardSlice.actions;
export const selectors = dashboardSlice.selectors;
export default dashboardSlice.reducer;