import { configureStore } from "@reduxjs/toolkit";
import { curryGetDefaultMiddleware, getDefaultMiddleware } from "@reduxjs/toolkit/dist";

import { articleApi } from "./article.js";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (curryGetDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})