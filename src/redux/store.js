import { configureStore } from "@reduxjs/toolkit";
import { setupListeners} from "@reduxjs/toolkit/query" ;
import { CartApi } from "./api/CartApi";
import { CheckApi } from "./api/CheckApi";
//    import { Form } from "react-router-dom";



export const store = configureStore({
    reducer : { 
        [CartApi.reducerPath] : CartApi.reducer,
        [CheckApi.reducerPath] : CheckApi.reducer

    },
    middleware :(getDefaultMiddleware) =>{
        return getDefaultMiddleware()
         .concat(CartApi.middleware)
         .concat(CheckApi.middleware)
    },
});

  setupListeners(store.dispatch);

export {
    useAddtoCartMutation ,
    useFatchCartQuery,
    useDeleteCartMutation
} from "./api/CartApi";

export {
    useAddCheckOutMutation ,
    useFatchCheckQuery
} from "./api/CheckApi";