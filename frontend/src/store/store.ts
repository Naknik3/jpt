import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";

// The global Redux store — holds all shared app state
export const store = configureStore({
    reducer: {
        chat: chatReducer, // manages conversation messages and ID
    },
});

// These types let useSelector and useDispatch work with TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
