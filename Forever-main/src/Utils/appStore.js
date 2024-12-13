import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import productsReducer from "./productsSLice";
import cartReducer from "./cartSLice"
import userReducer  from "./userSlice";

const appStore = configureStore({
    reducer:{
        search: searchReducer,
        products: productsReducer,
        cart:cartReducer,
        users:userReducer,
    }
});
export default appStore;
