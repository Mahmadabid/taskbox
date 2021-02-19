import {configureStore} from '@reduxjs/toolkit';
import themeReducer from "./Slice/ThemeSlice";
import taskReducer from "./Slice/TaskSlice";

export const store = configureStore({
    reducer : {
        themes: themeReducer,
        task: taskReducer,
    }
})
