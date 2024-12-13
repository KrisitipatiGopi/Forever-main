import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"Search",
    initialState:{
        showSearch: false,
    },
    reducers:{
        setShowSearch:(state) => {
            state.showSearch = !state.showSearch;
        },
    },
});

export const {setShowSearch} = searchSlice.actions;

export default searchSlice.reducer;