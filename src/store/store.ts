import { configureStore } from "@reduxjs/toolkit";
import { applicationReducer } from "@/store/reducers/application/application";

export const store = configureStore({
    reducer: {
        applicationReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;