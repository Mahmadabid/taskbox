import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '../Types/SliceTypes';

const initialState = { value: true } as ThemeState;

const themeSlice = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        setTheme: (state) => {
            state.value?state.value = false:state.value = true
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;