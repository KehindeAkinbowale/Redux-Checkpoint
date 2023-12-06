import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../TodoReducer";

export const store = configureStore({
    reducer: rootReducer
});