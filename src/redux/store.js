import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./features/trackSlice";

const store = configureStore({
    reducer: {
        track: trackReducer,
    },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself